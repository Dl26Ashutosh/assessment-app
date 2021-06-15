import React,{useState} from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';




function Signup() {
    const [errorMsgMail,setErrorMsgMail] = useState('');
    const [errorMsgPassword,setErrorMsgPassword] = useState('');
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [company,setCompany] = useState();



    const handleEmail = (e) =>
    {
        // setEmail(e.target.value);
        let value = e.target.value;
        let error;
        if(!value){
            error = 'Required';
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        {
            error='Invalid email address';
        }
        else
        {
            setEmail(value);
        }
        return setErrorMsgMail(error);
    }
    const handlePassword = (e) =>
    {
      let value = e.target.value;
        let error;
        if(!value){
            error = 'Required';
        }
        else
        {
            setPassword(value);
        }
        return setErrorMsgPassword(error);
      }
    const handleFirstName = (e) =>
    {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) =>
    {
        setLastName(e.target.value)
    }
    const handleCompany = (e) =>
    {
        setCompany(e.target.value)
    }
    const handleCreate = ( ) =>
    {
        if(email && password && firstName && lastName && company !=='' )
        {
            alert('Registration Successful')
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setCompany('');
            window.location.assign('/login')
        }
    }
    return (
        <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        maxHeight="100vh"
        >
          <Grid item xs={12} md={4} sm={6} style={{border:"1px solid lightgrey",borderRadius:"10px",boxShadow:"0.5px 0.5px 0.5px 0.5px lightgrey",marginTop:"3%",width:"30%"}}>
              
              <Box style={{padding:"20px"}}>
                    <Box>
                        <h2 style={{fontWeight:"bold",textAlign:"center"}}>Create your account</h2>
                    </Box>
                    <Box>
                    <InputLabel htmlFor="my-input" style={{fontWeight:"bold",fontSize:"18px",paddingBottom:"15px",color:"#3b3e66",textAlign:"left"}}>Email address</InputLabel>
                    <TextField size="small" style={{width:"100%",paddingBottom:"25px"}} id="outlined-basic"  variant="outlined" 
                    helperText={<div style={{color:"red"}}>{errorMsgMail}</div>} placeholder="Enter your email address"  value={email} onChange={(e)=>handleEmail(e)}/>
                    </Box>
                    <Box>
                    <InputLabel htmlFor="my-input" style={{fontWeight:"bold",fontSize:"18px",paddingBottom:"15px",color:"#3b3e66",textAlign:"left"}}>Password</InputLabel>
                    <TextField size="small" id="outlined-basic" style={{width:"100%",paddingBottom:"25px"}} value={password} type="password" helperText={<div style={{color:"red"}}>{errorMsgPassword}</div>} onChange={(e)=>handlePassword(e)} variant="outlined" placeholder="Enter your password" />
                    </Box>
                    <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingBottom:"40px"}}>
                        <Box style={{width:"45%"}}>
                                <Box>
                                <InputLabel htmlFor="my-input"  style={{fontWeight:"bold",fontSize:"18px",paddingBottom:"10px",color:"#3b3e66",textAlign:"left"}}>First name</InputLabel>
                                </Box>
                                <Box>
                                <TextField size="small" id="outlined-basic"  style={{width:"100%",paddingBottom:"15px"}} value={firstName} variant="outlined"placeholder="Enter your first name" onChange={(e)=>handleFirstName(e)}/>
                                </Box>
                        </Box>
                        <Box style={{width:"45%"}}>
                                <Box>
                                <InputLabel htmlFor="my-input" style={{fontWeight:"bold",fontSize:"18px",paddingBottom:"10px",color:"#3b3e66",textAlign:"left"}}>Last name</InputLabel>
                                </Box>
                                <Box>
                                <TextField size="small" id="outlined-basic" style={{width:"100%",paddingBottom:"15px"}}  value={lastName} variant="outlined"placeholder="Enter your last name" onChange={(e)=>handleLastName(e)}/>
                                </Box>
                        </Box>
                    </Box>
                    <Box>
                    <InputLabel htmlFor="my-input" style={{fontWeight:"bold",fontSize:"18px",paddingBottom:"15px",color:"#3b3e66",textAlign:"left"}}>Company</InputLabel>
                    </Box>
                    <Box>
                    <TextField size="small" id="outlined-basic" style={{width:"100%",paddingBottom:"15px"}} value={company} variant="outlined"placeholder="Enter your company" onChange={(e)=>handleCompany(e)} />
                    </Box>
                    <Box style={{paddingBottom:"20px",paddingTop:"20px",fontSize:"18px"}}>
                        By clicking the <b>Create account</b> button below you agree to our terms of service and privacy statement.
                    </Box>
                    <Box style={{textAlign:"center",padding:"18px"}}>
                    <Button variant="contained" color="primary" size="large" style={{width:"50%",height:"40px",fontWeight:"bold",fontSize:"1rem"}} onClick={handleCreate}> 
                    CREATE ACCOUNT
                    </Button>
                    </Box>
                </Box>
          </Grid>
        </Box>
    )
}
export default Signup
