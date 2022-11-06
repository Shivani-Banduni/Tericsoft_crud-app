import React from 'react';
import logo from './logo.svg';
import './App.css';
import { datasucess,datarequest,dataerror } from './reducers/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import axios from 'axios'
import { Addata } from './components/Addata';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

function App() {
  const dispatch=useDispatch()
  const todo=useSelector(store=>store.Data)

  // const [gender,setgender]=React.useState("")

  console.log(todo,"sdf")

  const gettodo=()=>{
      dispatch(datarequest())
      
     return axios.get("http://localhost:8080/posts")
      .then((res)=>{
      //  console.log(res.data,"sdff")
       dispatch((datasucess(res.data)))
      })   .catch((e)=>{
       console.log(e)
       dispatch(dataerror())
      })
  }


  const handeldelete=(id)=>{
 
    return axios.delete(`http://localhost:8080/posts/${id}`).then((res)=>{
      console.log(res.data,"sd")
      gettodo()
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  useEffect(() => {
      gettodo()
  }, []) 



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [gender,setgender]=React.useState()
  const [hobby,sethobby]=React.useState()

  const [data, setdata] = React.useState([]);
  // const [data1, setdata1] = React.useState([]);
  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
      console.log(data)
  };


  const handlepatch=(id)=>{
    console.log(id,data)
    return axios.patch(`http://localhost:8080/posts/${id}`,data).then((res)=>{  
    
      gettodo()
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  return (
    <div className="App">
      <Addata/>
      
 

<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>DOB</th>
    <th>Gender</th>
    <th>Hobbies</th>
    <th>Number</th>

  </tr>

  {todo.map((e)=>


  <tr>
    <td>{e.name}</td>
    <td>{e.email}</td>
    <td>{e.dob}</td>
    <td>{e.gender}</td>
    <td>{e.hobbies}</td>
    <td>{e.number}</td>
    <button onClick={()=>handeldelete(e.id)}>Delete</button>
    
    
        
        <Button onClick={handleOpen}>Edit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
           <input onChange={handlechange} name='name' placeholder='enter name'></input><br/><br/>
           <input onChange={handlechange} name='email' placeholder='enter email address'></input><br/><br/>
           <input onChange={handlechange} name='number' placeholder='enter mobile number'></input><br/><br/>
           <input onChange={handlechange} name='dob' type='date'></input><br/><br/>
  
           <input type="radio" id='male' onChange={handlechange} name="gender" value="male" />
          <label for="male">Male</label>
          <input type="radio" id='female' onChange={handlechange} name="gender" value="female"/>
          <label for="female">Female</label><br/><br/>
  
        <h4>Hobbies</h4> 
         <input type='checkbox'onChange={handlechange} name="hobbies" value='cooking' />
          <label for="hobbies">Cooking</label>
          <input type="checkbox" onChange={handlechange}   name="hobbies" value='fishing'/>
          <label for="hobbies">Fishing</label>
          <input type='checkbox' onChange={handlechange}  name="hobbies" value='reading' />
          <label for="hobbies">Reading</label>
          <input type="checkbox" onChange={handlechange}  name="hobbies" value='travelling' />
          <label for="hobbies">Travelling</label>
  
          <button onClick={()=>handlepatch(e.id)}>Edit</button>
  
  
  
  
  
          </Box>
        </Modal>
      
    
   


  </tr>

 )}

</table>
 
    </div>
  );
}

export default App;
