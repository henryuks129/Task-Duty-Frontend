import React,{ useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Alltask.css';
import edit from '../assets/edit.svg';
import deletes from '../assets/delete.svg';

const Alltask = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let url = 'https://task-duty-backend-t6j4.onrender.com/tasks/allTasks';
  const getFetchedData = async ()=>{
    let fetchUrl = await axios.get(url);
    setData(fetchUrl.data);
    console.log(fetchUrl.data);
  };
  useEffect(()=>{
    getFetchedData();
  },[]);
  function handleDelete(id){
    axios.delete(`https://task-duty-backend-t6j4.onrender.com/tasks/delete/${id}`)
    window.location.reload();
  }
  const toTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  // function handleSpecific(id){
  //   axios.get(`http://localhost:6060/tasks/singleTasks/${id}`)
  //   // window.location.reload();
  // }
  return (
    <div className=''>
      <div className='container'>
      <div>
      {data.map((datum) => {
        let { _id, title, description,tag,author } = datum;
        return (
          <div key={_id} className='border border-3 rounded-3 my-5'>
            <div className='d-flex justify-content-between align-items-center mt-1'>
              <div className='pt-4'>
               <p>{tag}</p>
              </div>
              <div className='d-flex gap-5'>
             <div>
               <button onClick={()=>{navigate(`/Edittask/${_id}`)}}  className=" btn-primary button-1">edit</button>
               <img src={edit} alt=""  className='edit-image'/>
             </div>
              <div>
                <button onClick={()=>handleDelete(_id)} className=" btn-primary button-2">
                  delete item
                  </button>
                  {/* <img src={deletes} alt="" className='delete-image'/> */}
              </div>
              </div>
            </div>
            <hr className='' />
            <h3 className='title-text'>{title}</h3>
            <p className='description-text'>{description}</p>
            <h3>{author}</h3>
          </div>
        );
      })}
      </div>
            <div className='mb-4 text-center'>
             <h4 onClick={toTop} className='to-top text-center'>Back To Top</h4>
            </div>
      </div>
    </div>
  )
}

export default Alltask