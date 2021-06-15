import React,{useState} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { InputLabel } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));



export default function ForgotPassword() {
    const classes = useStyles();
    const [errorMsgMail,setErrorMsgMail] = useState('');
    const [errorPassword,setErrorMsgPassword] = useState('');
    const [errorConfirmPassword,setErrorConfirmPassword] = useState('');

    // const [errorMsgMail,setErrorMsgMail] = useState('');

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setconfirmPassword] = useState();

    const handleEmail = (e) =>
    {
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
    const handleConfirmPassword = (e) =>
    {
      let value = e.target.value;
      let error;
      if(!value){
          error = 'Required';
      }
      else if(value !== password)
      {
          error = "Password must be matched";
      }
      else
      {
          setconfirmPassword(value);
      }
      return setErrorConfirmPassword(error);
    }
    const handleLogin = () =>
    {
        email !== '' ?  setEmail(email) : setErrorMsgMail('Required');
        password !== '' ? setPassword(password) : setErrorMsgPassword('Required');
        confirmPassword !== ''? setconfirmPassword(confirmPassword) : setErrorConfirmPassword('Required');
        if(email && password && confirmPassword !== '')
        {
          alert('Password Changed')
          setEmail('');
          setPassword('');
          setconfirmPassword('');
        }
        
    }
    return (
        <Box  display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        style={{  
            // backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        <Grid item xs={12} sm={3} style={{border:"1px solid lightgrey",borderRadius:"10px",boxShadow:"0.5px 0.5px 0.5px 0.5px lightgrey"}}>
          <Paper className={classes.paper} style={{paddingBottom:"80px",borderRadius:"10px"}}>
            <div style={{textAlign:"center",paddingBottom:"50px"}}>
                <div style={{fontSize:"30px",fontWeight:"bolder"}}>Change Password</div>
            </div>
            
            <InputLabel style={{fontSize:"18px",fontWeight:"bold",textAlign:"start",color:"#3b3e66"}}>Email Address</InputLabel>
            <TextField
                   
                    id="outlined-full-width"
                     style={{paddingBottom:"20px"}}
                    placeholder="Email"
                    helperText={<div style={{color:"red"}}>{errorMsgMail}</div>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Email/></InputAdornment>,
                      }}
                      value={email}
                    variant="outlined"
                    onChange={(e)=>handleEmail(e)}
            />
             <InputLabel style={{fontSize:"18px",fontWeight:"bold",textAlign:"start",color:"#3b3e66"}}>New password</InputLabel>
            <TextField
                   
                    id="outlined-full-width"
                    style={{paddingBottom:"20px"}}
                    helperText={<div style={{color:"red"}}>{errorPassword}</div>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                      }}
                    variant="outlined"
                    value={password}
                    type="password"
                    onChange={(e)=>handlePassword(e)}
            />
             <InputLabel style={{fontSize:"18px",fontWeight:"bold",textAlign:"start",color:"#3b3e66"}}>Confirm password</InputLabel>
            <TextField
                    id="outlined-full-width"
                    style={{paddingBottom:"20px"}}
                    helperText={<div style={{color:"red"}}>{errorConfirmPassword}</div>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                      }}
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e)=>handleConfirmPassword(e)}
            />
                <Button variant="contained" color="primary" size="large" style={{width:"100%",height:"45px",fontWeight:"bold"}} onClick={handleLogin}>
                    CHANGE PASSWORD
                </Button>
          </Paper>
        </Grid>
            
        </Box>
    )
}
