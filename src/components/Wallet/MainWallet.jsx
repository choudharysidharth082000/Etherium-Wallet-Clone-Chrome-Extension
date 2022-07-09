import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Alert from "@mui/material/Alert";
import message from "../../Messages/message.json";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


//importing the components
import Navbar from "./Navbar"
import BottomContainor from "./BottomContainor";
import MiddleViewer from "./MiddleViewer";
import ButtonSection from "./ButtonSection";
import { useState, useEffect } from "react";
import Table from "./Table";

const MainWallet = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [userData, setUserData] = useState({
    Balance: 0,
    WalletAddress: "",
  });
  //function to fetch the balance from the APi
  const findBalance = async () => {
    try {
      const userID = window.localStorage.getItem("userID");
      const findBalance = await axios.get(
        `https://prodigalwallet.herokuapp.com/v1/auth/checkBalance/${userID}`
      );
      if (!findBalance) {
        setInfo(true);
        setInfoMessage(message.notFound);
      } else {
        setUserData({
          Balance: findBalance.data.balance,
          WalletAddress: findBalance.data.address,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findBalance();
  }, []);
  const [alert, setAlert] = useState(true);
  const [info, setInfo] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, []);
  return (
    <div className={`containor w-full h-full relative`}>
      <Navbar />
      <div className="contaniorToast transition-all">
        {alert && <Toast message={message.login_success} />}
      </div>
      <div className={info ? "block" : "hidden"}>
        <ToastInfo message={infoMessage} />
      </div>
      <BottomContainor Address={userData} />
      <MiddleViewer
        style={`${isClicked ? "hidden" : "block"}`}
        Balance={userData}
        setAlert={setAlert}
      />
      <ModalTransaction
        style={`${isClicked ? "block" : "hidden"}`}
        modelValue={props.modalValue}
        newStyle={props.style}
        changeContent={setIsClicked}
      />
      <ButtonSection isClickedButton={setIsClicked} />
      <Table />
    </div>
  );
};

//Modal for Transaction
const ModalTransaction = (props) => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState();
  const [initiate, setInitiate] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleInputAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const handleInputAmount = (e) => {
    const amount = e.target.value;
    setAmount(amount);
  };
  //signing the transaction
  const signTransaction = async () => {
    const user = window.localStorage.getItem("userID");
    try {
      const postData = await axios.post(
        `https://prodigalwallet.herokuapp.com/v1/Transaction/signTransaction/${user}?toAddress=${address}&valueAmount=${amount}`
      );
      if (!postData) {
        alert("Data Not Posted");
      } else {
        setInitiate(true);
        console.log(postData);
        setTimeout(() => {
          setInitiate(false);
          setSuccess(true);
        }, 8000);
        setTimeout(() => {
          window.location.reload();
        }, 10000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`containor w-full flex justify-center items-center px-8 py-10 flex-col ${props.style} ${props.newStyle}`}
    >
      <div className={initiate ? "block" : "hidden"}>
        <ToastCustom
          message={message.transaction_initiate}
          color="warning"
          severity="warning"
        />
      </div>
      <div className={success ? "block" : "hidden"}>
        <ToastCustom
          message={message.transaction_success}
          color="success"
          severity="success"
        />
      </div>

      {/* <input
        type="text"
        value={address}
        onChange={handleInputAddress}
        placeholder="0x234.....90786"
        className="px-6 py-2 rounded-md outline-none border border-slate-500 text-slate-500 my-4"
      />
       */}
         <div className="containorText m-2">
        <TextField
          // sx={{
          //   width: { sm: 150, md: 270 },
          //   "& .MuiInputBase-root": {
          //     height: 50,
          //   },
          // }}
          value={address}
          type="text"
          onChange={handleInputAddress}
          id="outlined-basic"
          label="0x234.....90786"
          variant="outlined"
        />
      </div>
      {/* <input
        type="text"
        value={amount}
        onChange={handleInputAmount}
        placeholder="0.0000 ETH"
        className="px-6 py-2 rounded-md outline-none border border-slate-500 text-slate-500"
      /> */}
        <div className="containorText m-2">
        <TextField
          // sx={{
          //   width: { sm: 150, md: 270 },
          //   "& .MuiInputBase-root": {
          //     height: 50,
          //   },
          // }}
          value={amount}
          type="text"
          onChange={handleInputAmount}
          id="outlined-basic"
          label="0.0000 ETH"
          variant="outlined"
        />
      </div>
      <div className="containorButton flex w-full justify-around items-center">
        <button
          className="my-4 py-3 px-8 text-white rounded-md bg-blue-500"
          onClick={()=>
          {
            props.modelValue(true)
          }}
          // onClick={signTransaction}
        >
          Send
        </button>
        <button
          className="my-4 py-2 px-7 text-red-500 rounded-md bg-white border border-red-500 transition-all hover:bg-red-500 hover:text-white"
          onClick={() => {
            props.changeContent(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

const Toast = (props) => {
  return (
    <div className="containorToast p-2">
      <Alert severity="success" color="success">
        {props.message}
      </Alert>
    </div>
  );
};
const ToastCustom = (props) => {
  return (
    <div className="containorToast p-2">
      <Alert severity={props.severity} color={props.color}>
        {props.message}
      </Alert>
    </div>
  );
};
const ToastInfo = (props) => {
  return (
    <div className="containorToast p-2">
      <Alert severity="info" color="info">
        {props.message}
      </Alert>
    </div>
  );
};

export default MainWallet;
