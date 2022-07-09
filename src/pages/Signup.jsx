import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


const Signup = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //function to handle email and password
  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value ? value : "");
  };
  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value ? value : "");
  };
  const handleClick = async () => {
    try {
      const postData = await axios.put(
        `https://prodigalwallet.herokuapp.com/v1/auth/signup?email=${email}&password=${password}`
      );
      if (!postData) {
        alert("Data Not Found");
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
      alert(error.message);
    }
  };
  return (
    <div className="containorTest w-full h-96 flex justify-center items-center flex-col bg-white ">
      <h1 className="text-xl m-6 font-semibold font-sans text-blue-500">
        Signup !!
      </h1>
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
          value={password}
          type="password"
          onChange={passwordHandler}
          id="outlined-basic"
          label="password"
          variant="outlined"
        />
      </div>
      <div className="buttons w-full flex justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 w-[65%] py-4 px-2 rounded-md text-white outline-none border-none flex justify-center items-center"
        >
          {loader ? <Loader /> : "Sign"}
        </button>
      </div>
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

export default Signup;
