import React,{useState} from 'react';
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Lock from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';


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

export default function Login() {
    const classes = useStyles();
    const [errorMsgMail,setErrorMsgMail] = useState('');
    const [errorMsgPassword,setErrorMsgPassword] = useState('');

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
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
    const handleLogin = () =>
    {
        if(email && password !== '')
        {
        window.location.assign('/users')
        }
        else
        {
            const error = 'Required'
            setErrorMsgMail(error);
            setErrorMsgPassword(error)
        }
    }
    return (
        <Box  display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        style={{  
            bbackgroundColor: "lavender",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        <Grid item xs={12} md={4} sm={3} >
          <Paper className={classes.paper} style={{border:"1px solid lightgrey",borderRadius:"10px"}}>
            <div style={{textAlign:"center",paddingTop:"10px"}}>
          <div style={{fontSize:"30px",fontWeight:"bolder"}}>Login</div>
            </div>
            
            <TextField
                    
                    id="outlined-full-width"
                    label="Email Address"
                    // style={{ margin: 8 }}
                    placeholder="Email"
                    helperText={<div style={{color:"red"}}>{errorMsgMail}</div>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Email/></InputAdornment>
                      }}
                    variant="outlined"
                    onChange={(e)=>handleEmail(e)}
            />

            <TextField
                    
                    id="outlined-full-width"
                    label="Password"
                    // style={{ margin: 8 }}
                    type="password"
                    placeholder="Password"
                    helperText={<div style={{color:"red"}}>{errorMsgPassword}</div>}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                      }}
                    variant="outlined"
                    onChange={(e)=>handlePassword(e)}
            />
            <div style={{display:"flex",flexDirection:"row"}}>
                        <FormControlLabel style={{width:"50%",paddingLeft:"8px"}}
                    control={
                    <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me" 
                />
                <Link href="/forgot-password" style={{width:"50%",lineHeight:"5",textAlign:"end",color:"#4191ff"}}>Forgot Password?</Link>         
      </div>
                <Button variant="contained" color="primary" size="large" style={{backgroundColor:"black",width:"50%",height:"40px",fontWeight:"bold",marginBottom:"30px"}} onClick={handleLogin}>
                    Sign in
                </Button>
                <Box display="flex"
                flexDirection="row"
                justifyContent="Center"
                lineHeight="3"
                fontSize="18px"
                color= "rgba(59,62,102,.5)">
                Don't have an account?<Link href="/registration" color="primary" style={{paddingLeft:"5px",color:"#4191ff"}}>Sign up</Link>
                </Box>
          </Paper>
        </Grid>
        </Box>
    )
}
