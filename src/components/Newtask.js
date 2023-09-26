import React,{ useState,useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import vector  from '../assets/Vector.svg';
import add from '../assets/add.svg'
import { useNavigate,Link } from 'react-router-dom';
import '../styles/Newtask.css';
import axios from 'axios';

const Newtask = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [author, setAuthor] = useState('');
  // let url = 'https://task-duty-backend-t6j4.onrender.com/allTasks';
  // const getFetchedData = async ()=>{
  //   let fetchUrl = await axios.get(url);
  //   setData(fetchUrl.data);
  //   console.log(fetchUrl.data);
  // };
  // useEffect(()=>{
  //   getFetchedData();
  // },[data]);
  function handlePost(e){
    e.preventDefault();
    axios.post('https://task-duty-backend-t6j4.onrender.com/tasks/createTasks',{
      title:title,
      description:description,
      tag:tag,
      author:author,
    })
    navigate('/Alltask')
    // window.location.reload();
  }
  const toTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='body'>
      <div className='container'>
      <div className='d-flex justify-content-between mt-4'>
        <div className='d-flex gap-2' onClick={()=>{navigate('/Alltask')}}>
        <img src={vector} alt="" className='vector' />
        <h2>New Task</h2>
        </div>
        <div className='d-flex gap-2' onClick={()=>{navigate('/Edittask')}}>
          <img src={add} alt="" className="add" />
          <h6>Add New Task</h6>
        </div>
      </div>
      <div className='mt-5 mb-5 text-center'>
      <form action="">
        {/* <label htmlFor="title">Title:</label> */}
        <input type="text" id='title' className='title' placeholder='title' onChange={(e)=> setTitle(e.target.value)} value={title}/><br /><br />
        {/* <label htmlFor="description">Description:</label> */}
        <input type="text" id='description' onChange={(e)=> setDescription(e.target.value)} className='description' placeholder='description' value={description}/><br /><br />
        {/* <label htmlFor="" id='author'>Author:</label> */}
        <input type="text" id='author' placeholder='author' onChange={(e)=> setAuthor(e.target.value)} className='author' value={author}/><br/><br/>
        <div className=''>
        <Form.Select value={tag} onChange={(e)=> setTag(e.target.value)} className='tag '>
        <option><Badge bg="secondary" className='bg-light'></Badge></option>
        <option className='badge-1'><Badge bg="danger">Urgent</Badge></option>
        <option className='badge-2'><Badge bg="danger">Important</Badge></option>
        </Form.Select>
        </div>
        {/* <h5 className='badge-1'><Badge bg="secondary">Urgent</Badge></h5> */}
        {/* <h5 className='badge-2'><Badge bg="secondary">Important</Badge></h5> */}
      </form>
      </div>
      <div className='text-center'>
      <button onClick={handlePost} className='btn text-white btn-dark newtask-button mb-5'>
        {/* <Link to='/Alltask' className='text-white text-decoration-none'> */}
          <h4 className='button-text'>Done</h4>
        {/* </Link> */}
        </button>
      </div>
      <div className='mb-4 text-center'>
             <h4 onClick={toTop} className='to-top text-center'>Back To Top</h4>
            </div>
      </div>
    </div>
  )
}

export default Newtask