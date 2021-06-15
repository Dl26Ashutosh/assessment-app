import React,{useState} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';
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
    const [errorMsg,setErrorMsg] = useState('');
    const [email,setEmail] = useState('');
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
        return setErrorMsg(error);
    }
    const handleLogin = () =>
    {
        // setEmail(email);
        if(email!=='')
        {
        window.location.assign('/change-password')
        }
        else
        {
          const error = 'Required';
          setErrorMsg(error);
        }

        // alert(email)
    }
    return (
        <Box  display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        style={{  
            // backgroundColor: "rgb(211,211,211)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >


        <Grid item xs={12} md={5} sm={6} style={{border:"1px solid lightgrey",borderRadius:"10px",boxShadow:"0.5px 0.5px 0.5px 0.5px lightgrey"}}>
          <Paper className={classes.paper} style={{paddingBottom:"80px",borderRadius:"10px"}}>
            <div style={{textAlign:"center",paddingBottom:"50px"}}>
          <div style={{fontSize:"30px",fontWeight:"bolder"}}>Forgot Password</div>
          <div style={{fontSize:"20px",color:"rgba(59,62,102,.5)"}}>Forgot your password? No worries, we're here to help!</div>
            </div>
            
            {/* <div style={{padding:"10px",width:"504px"}}> */}
            <InputLabel style={{fontSize:"18px",fontWeight:"bold",textAlign:"start",color:"#3b3e66"}}>Email Address</InputLabel>
            <TextField
                    id="outlined-full-width"
                  style={{paddingBottom:"20px"}}
                    placeholder="Email"
                    helperText={<div style={{color:"red"}}>{errorMsg}</div>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Email/></InputAdornment>,
                      }}
                    variant="outlined"
                    onChange={(e)=>handleEmail(e)}
            />
            <Button variant="contained" color="primary" size="large" style={{width:"100%",height:"45px",fontWeight:"bold"}} onClick={handleLogin}>
                    SEND PASSWORD
                </Button>
            {/* </div>        */}
                
          </Paper>
        </Grid>
            
        </Box>
    )
}
