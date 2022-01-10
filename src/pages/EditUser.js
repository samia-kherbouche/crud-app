import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate ,useParams } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux'
import {updateUser, getSingleUser} from '../redux/actions/actions'
const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:100,
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));

const EditUser = () => {
  const classes = useStyles();
  let navigate=useNavigate();
  let {id}=useParams();

  const {user} = useSelector(state => state.data)
  const dispatch = useDispatch();

  const [state, setstate] = useState({
    name: '',
    email:'',
    contact: '',
    address: ''
  })

  const [error, setError] = useState('')
  const {name,email,contact,address}=state;
//get single user
  useEffect(() => {
     dispatch(getSingleUser(id))
  }, [])

  useEffect(() => {
    if (user) {
        setstate({...user})
    }
 }, [user])

 const handleInputChange=(e)=>{
  let {name,value}=e.target;
  setstate({...state,[name]:value});
 }
 
 const handleSubmit=(e)=>{
  e.preventDefault();
  if (!name || !email || !contact || !address) {
    setError('Please input all input field')
  }else{
    dispatch(updateUser(state,id))
    navigate("/")
    setError('')
  }
 }
    return (
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
         <Button variant="contained" color="secondary" style={{marginTop:"20px"}} onClick={() =>navigate("/")}>
         Go Back</Button>
        <h2>Edit User</h2>
        {error && <h3 style={{color: 'red'}}>{error}</h3>}
         <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
            <TextField id="standard-basic" label="Name" name="name" value={name || ""} type='text' onChange={handleInputChange} />
            <br/>
            <TextField id="standard-basic" label="Email" name="email" value={email || ""} type='email' onChange={handleInputChange} />
            <br/>
            <TextField id="standard-basic" label="Contact" name="contact" value={contact || ""} type='number' onChange={handleInputChange} />
            <br/>
            <TextField id="standard-basic" label="Address" name="address" value={address || ""} type='text' onChange={handleInputChange} />
            <br/>
            
            <Button variant="contained" color="primary" type="submit" style={{width:"100px"}} onChange={handleInputChange} >Edit</Button> 
            
        </form>
        </div>
    )
}

export default EditUser
