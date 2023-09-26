import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate,Link,useParams } from 'react-router-dom';
import '../styles/Edittask.css';

const Edittask = () => {
  const {id} = useParams();
  // console.log(id);
  // useEffect(()=>{
  //   axios.get(`http://localhost:6060/tasks/singleTasks/${id}`)
  //   .then((res)=>console.log(res))
  //   // fetch(`http://localhost:6060/tasks/singleTasks/${id}`)
  //   // .then((res)=>res.json())
  //   // .then((resp)=>console.log(resp))

  // },[])
  const navigate = useNavigate();
  const [data, setData] = useState([])
  // const {title, description, tag, author} = data;
  // const onEditChange = (e)=>{
  //   setData( );
  // }
  // const handleEdit = async (e)=>{
  //   e.preventDefault();
  //   await axios.put(`http://localhost:6060/tasks/update/${id}`, data);
  //   navigate('/Alltask')
  // }
  const loadTask = async ()=>{
    const result = await axios.get(`https://task-duty-backend-t6j4.onrender.com/tasks/singleTasks/${id}`)
    setData(result.data)
    console.log(result.data);
  }
  useEffect(()=>{
    loadTask();
  },[])

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [author, setAuthor] = useState('');
  // let url = 'http://localhost:6060/tasks/allTask';
  // const getFetchedData = async ()=>{
  //   let fetchUrl = await axios.get(url);
  //   setData(fetchUrl.data);
  //   console.log(fetchUrl.data);
  // };
  useEffect(()=>{
    // getFetchedData();
  },[]);
  // function handlePost(e){
  //   e.preventDefault();
  //   axios.patch(`http://localhost:6060/tasks/update/:${id}`,{
  //     title:title,
  //     description:description,
  //     tag:tag,
  //     author:author,
  //   })
  //   // window.location.reload();
  //   navigate('/Alltask')
  // }
  const toTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      <div className='body'>
      <div className='container'>
      <div className='d-flex mt-4 gap-3' onClick={()=>{navigate('/Alltask')}}>
        <h2>Edit Task</h2>
      </div>
      <div className='mt-5 mb-5 text-center'>
      <form action="">
        {/* <label htmlFor="title">Title:</label> */}
        <input type="text" id='title' className='title' placeholder='title' onChange={(e)=> setTitle({...title, [e.target.title] : e.target.value})}/><br /><br />
        {/* <label htmlFor="description">Description:</label> */}
        <input type="text" id='description' onChange={(e)=> setDescription(e.target.value)} className='description' placeholder='description'/><br /><br />
        {/* <label htmlFor="" id='author'>Author:</label> */}
        <input type="text" id='author' placeholder='author' onChange={(e)=> setAuthor(e.target.value)} className='author'/><br/><br/>
        <div className=''>
        <Form.Select  onChange={(e)=> setTag(e.target.value)} className='tag '>
        <option><Badge bg="secondary" className='bg-light'></Badge></option>
        <option className='badge-1'><Badge bg="danger">Urgent</Badge></option>
        <option className='badge-2'><Badge bg="danger">Important</Badge></option>
        </Form.Select>
        <span className='span-1'>Urgent</span>
        <span className='span-2'>Important</span>
        </div>
        {/* <h5 className='badge-1'><Badge bg="secondary">Urgent</Badge></h5> */}
        {/* <h5 className='badge-2'><Badge bg="secondary">Important</Badge></h5> */}
      </form>
      </div>
      <div className='text-center'>
      {/* <button onClick={handlePost} className='btn text-white btn-dark newtask-button mb-5'>
        {/* <Link to='/Alltask' className='text-white text-decoration-none'> */}
          {/* <h4 className='button-text'>Done</h4> */}
        {/* </Link> */}
        {/* </button> */} 
      </div>
      <div className='mb-4 text-center'>
             <h4 onClick={toTop} className='to-top text-center'>Back To Top</h4>
            </div>
      </div>
    </div>
    </div>
      )
}

export default Edittask




