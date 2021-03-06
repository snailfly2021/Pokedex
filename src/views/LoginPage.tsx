import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Alert, AlertTitle } from '@material-ui/lab';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Collapse from '@material-ui/core/Collapse';
import styled from "styled-components";
import Github from "../components/LoginIcon/Github";
import Google from "../components/LoginIcon/Google";
import Header from "../components/Common/Header";
import NavBar from "../components/Common/NavBar";
import {NavLink} from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { MemoryRouter as Router } from "react-router";
import LoginHeader from "components/LoginHeader";
import { useHistory } from "react-router";
import axios from 'axios';
import server from '../config/server';

const Background = styled.div`
  background: url("https://onlyvectorbackgrounds.com/wp-content/uploads/2019/03/Subtle-Lines-Abstract-Gradient-Background-Cool.jpg")
    no-repeat center center fixed rgba(161, 189, 198, 0.75);
  min-height: 100vh;
  background-size: cover;
  background-blend-mode: multiply;
`;

const Indicator = styled.div`
  background: #3d5afe;
  height: 5%;
  width: 100%;
  .adminButtonStyle {
    margin-top: 20px;
    background: #81cfed;
    border: none;
    padding: 10px;
    border-radius: 8px;
    color: #ffff;
    font-weight: bold;
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  width: 850px;
  margin: 0 auto;
  background: inherit;
  @media (max-width: 875px) {
    width: 418px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright ?? "}
      <Link color="inherit" href="#">
        Pokedex
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(53, 57, 30, 0.4)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  switchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: "#616161",
  },
  copyright: {
    marginBottom: 0,
  },
  admin: {},
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    marginLeft: theme.spacing(2),
    alignItems: "center",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [flag, setFlag] = React.useState(1);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const history = useHistory();

  const handleChangeFlag = (event: any) => {
    const temp = event.currentTarget.id;
    if (temp === "login") {
      setFlag(1);
    } else {
      setFlag(2);
    }
  };

  const handleChangeUserName = (event: any) => {
    const temp = event.target.value;
    setUserName(temp);
  }

  const handleChangePassword = (event: any) => {
    const temp = event.target.value;
    setPassword(temp);
  }

  const handleClickSubmit = () => {
    if (flag === 1) {
      axios({
        method: 'post',
        url: server + '/login',
        data: {
          userName: userName,
          password: password
        }
      })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          history.push('/collections');
        } else {
          setMessage('Login failed!');
          setOpen(true);
        }
      })
      .catch((error) => {
        console.log(error)
        setMessage('Login failed!');
        setOpen(true);
      })
    } else {
      axios({
        method: 'post',
        url: server + '/register',
        data: {
          userName: userName,
          password: password
        }
      })
      .then((response) => {
        console.log(response);
        history.push('/login');
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  return (
    <Background>
      <Collapse in={open}>
        <Alert severity="error" onClose={() => {setOpen(false);}}>
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
      </Collapse>
      <Header />
      <NavBar />
      <LoginHeader flag={flag}/>
      <Wrapper>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <div className={classes.switchContainer}>
              <div>
                <Button id="login" className={classes.button} onClick={handleChangeFlag}>
                  Sign In
                </Button>
                <Indicator hidden={flag !== 1} />
              </div>
              <div>
                <Button id="register" className={classes.button} onClick={handleChangeFlag}>
                  Register
                </Button>
                <Indicator hidden={flag !== 2} />
              </div>
            </div>
            <form className={classes.form} noValidate hidden={flag !== 1}>
              <TextField
                value = {userName}
                onChange = {handleChangeUserName}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                value = {password}
                onChange = {handleChangePassword}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClickSubmit}
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </form>
            <form className={classes.form} noValidate hidden={flag !== 2}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter Your Valid Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Set your Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
            </form>
          </div>

          <div className={classes.iconContainer}>
            <NavLink exact activeClassName="selected" to="/admin" >
              Admin
            </NavLink>
            <div className={classes.icon}>
              <a
                // href="https://github.com/zipengliang21"
                target="_blank"
                rel="noreferrer"
              >
                <Google />
              </a>
            </div>
            <div className={classes.icon}>
              <a
                href="https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
          <Box className={classes.copyright} mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Wrapper>
    </Background>
  );
}
