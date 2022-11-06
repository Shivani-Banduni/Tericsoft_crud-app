import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';


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
  
export const Addata = () => {
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

    const handlesubmit=()=>{
        console.log(data)
        return axios.post("http://localhost:8080/posts",data).then((res)=>{
        //   console.log(res.data,"sd")
        //   gettodo()
        })
        .catch((e)=>{
          console.log(e)
        })
      }
    
  return (
    <div>
        
      <Button onClick={handleOpen}>Add Details</Button>
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
        <label for="hobbies">Travelling</label><br/><br/>

        <input type='submit' onClick={handlesubmit}></input>





        </Box>
      </Modal>
    
    </div>
  )
}
