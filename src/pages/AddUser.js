import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {addUser} from '../redux/actions/actions'
const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:100,
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));

const AddUser = () => {
  const classes = useStyles();
  let navigate=useNavigate();

  
  const dispatch = useDispatch();

  const [state, setstate] = useState({
    name: '',
    email:'',
    contact: '',
    address: ''
  })

  const [error, setError] = useState('')
  const {name,email,contact,address}=state;

 const handleInputChange=(e)=>{
  let {name,value}=e.target;
  setstate({...state,[name]:value});
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  if (!name || !email || !contact || !address) {
    setError('Please input all input field')
  }else{
    dispatch(addUser(state))
    navigate("/")
    setError('')
  }
 }
    return (
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
         <Button variant="contained" color="secondary" style={{marginTop:"20px",width:"100px"}} onClick={() =>navigate("/")}>
         Go Back</Button>
        <h2>Add User</h2>
        {error && <h3 style={{color: 'red'}}>{error}</h3>}
         <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
            <TextField id="standard-basic" label="Name" name="name" value={name} type='text' onChange={handleInputChange} />
            <br/>
            <TextField id="standard-basic" label="Email" name="email" value={email} type='email' onChange={handleInputChange} />
            <br/>
            <TextField id="standard-basic" label="Contact" name="contact" value={contact} type='number' onChange={handleInputChange} />
            <br/>
            <TextField id="standard-basic" label="Address" name="address" value={address} type='text' onChange={handleInputChange} />
            <br/>
            
            <Button variant="contained" color="primary" type="submit" style={{width:"100px"}}>Submit</Button> 
            
        </form>
        </div>
    )
}

export default AddUser
