import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [passsword, setPassword] = React.useState("");
  const [loaderSignup, setLoadSignup] = useState(false);
  const [authAlert, setAuthAlert] = useState(false);
  const [loader, setLoader] = useState(false);
  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  //handle submit after click
  const handleClick = async () => {
    console.log(email, passsword);
    setLoader(true);
    setAuthAlert(true);
    try {
      const postData = await axios.put(
        `https://prodigalwallet.herokuapp.com/v1/auth/login?email=${email}&password=${passsword}`
      );
      if (!postData) {
        console.log("Data Not Sent");
      } else {
        if (postData.data.status) {
          window.localStorage.setItem("userID", postData.data.userID);
          document.cookie = `userID=${postData.data.email}`;
          console.log(postData);
          navigate("/wallet");
        } else {
          alert("Wrong Email  or password");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const hamdleClickSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="containorTest w-full h-full flex justify-center items-center flex-col bg-white  py-4">
      <div className={authAlert ? "block" : "hidden"}>
        <ToastCustom
          severity="success"
          color="info"
          message="Authentication Called"
        />
      </div>
      <h1 className="text-xl m-6 font-semibold font-sans text-blue-500">
        Login!!
      </h1>
      {/* <input
        type="email"
        value={email}
        placeholder="email"
        onChange={emailHandler}
        className="w-[80%] bg-gray-50 text-gray-500 placeholder-gray-500 py-1 px-4 my-2 rounded-md outline-none bg-transparent"
      /> */}
      <div className="containorText m-2">
        <TextField
          // sx={{
          //   width: { sm: 150, md: 270 },
          //   "& .MuiInputBase-root": {
          //     height: 50,
          //   },
          // }}
          id="outlined-basic"
          value={email}
          onChange={emailHandler}
          label="email"
          variant="outlined"
          className="m-2 w-full text-red-100"
        />
      </div>
      <div className="containorText m-2">
        <TextField
          // sx={{
          //   width: { sm: 150, md: 270 },
          //   "& .MuiInputBase-root": {
          //     height: 50,
          //   },
          // }}
          value={passsword}
          type="password"
          onChange={passwordHandler}
          id="outlined-basic"
          label="password"
          variant="outlined"
        />
      </div>

      {/* <input
        type="password"
        value={passsword}
        placeholder="password"
        onChange={passwordHandler}
        className="w-[80%] bg-gray-50 text-gray-500 placeholder-gray-500 py-1 px-4 my-2 rounded-md outline-none bg-transparent  "
      /> */}
      <div className="buttons w-full flex justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 w-[65%] py-4 px-2 rounded-md text-white outline-none border-none flex justify-center items-center"
        >
          {loader ? <Loader /> : "Login"}
        </button>
      </div>
      <div className="buttons w-full flex justify-center items-center m-2">
        <button
          onClick={hamdleClickSignup}
          className="bg-white w-[65%] py-4 px-2 rounded-md text-blue-500 border border-blue-500 outline-none flex justify-center items-center"
        >
          {loaderSignup ? <Loader /> : "Signup"}
        </button>
      </div>
      {/* <div className="link p-2">
        <ul>
          <li><a className="text-sm text-red-400" href="#">Click here to create account!!</a></li>
        </ul>
      </div> */}
    </div>
  );
};

const ToastCustom = (props) => {
  return (
    <div className="containorToast p-2">
      <Alert severity={props.severity} color={props.color} variant="filled">
        {props.message}
      </Alert>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="loader h-10 w-10">
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="inherit" className="text-sm" />
      </Box>
    </div>
  );
};

export default Login;
