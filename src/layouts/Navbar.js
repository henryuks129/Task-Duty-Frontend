import React,{ useState } from 'react';
import tasklogo from '../assets/taskLogo.svg';
import profile from '../assets/profilepic1.svg';
import status from '../assets/onlinestatus.svg'
import  { Link, useNavigate }  from 'react-router-dom';
import '../styles/Navbar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Nav = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  // const [allTask, setAllTask] = useState(false);
  // const [newTask, setNewTask] = useState(false);
  // if(allTask && newTask){
  //   return <Navigate to='/Alltask'/>;
  // }
  return (
    <div className='sticky-top nav-body '>
      <div className='d-flex justify-content-between container align-items-center'>
        <div>
          <Link to='/'>
            <img src={tasklogo} alt="" className='task-logo' onClick={()=>{navigate('/')}}/>
          </Link>
        </div>
        <nav className=''>
          <ul className='d-flex gap-5 align-items-center'>
            <li className='list-unstyled pt-3'>
              <Link to='/Newtask' className='text-decoration-none text-dark'>
                <h5>New Task</h5>
              </Link>
              </li>
            <li className='list-unstyled pt-3'>
              <Link to='/Alltask' className='text-decoration-none text-dark'>
                <h5 className='transform ' onClick={()=>{navigate('/Alltask')}}>All task</h5>
              </Link>
            </li>
            <li className='list-unstyled pt-2'>
              {/* <Link to='/'> */}
                {/* <img src={profile} alt="" className='profile-image' /> */}
              {/* </Link> */}
        <img src={profile} alt="" variant="none" onClick={handleShow} className="border-none  profile-image"/>
      <Offcanvas show={show} onHide={handleClose} {...props} className='bg-dark text-white'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-white'><h1>TaskDuty</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=''>
          <ul>
            <li className='list-unstyled'>
              <Link to='/Newtask' className='text-decoration-none text-white'>
                 <h4>New Task</h4>
              </Link>
            </li>
            <li className='list-unstyled'>
               <Link to='/Alltask' className='text-decoration-none text-white'>
                 <h4>All Task</h4>
               </Link>
            </li>
          </ul>
        </Offcanvas.Body>
        </Offcanvas>
          <div className='status'>
            <img src={status} alt="" />
          </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
function Navbar() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <Nav key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Navbar