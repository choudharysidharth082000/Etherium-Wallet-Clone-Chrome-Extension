import { Modal } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

import MainWallet from "../components/Wallet/MainWallet";

const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mainContainor h-full w-full flex flex-col justify-center items-center relative">
      <MainWallet modalValue={setOpen} style={open ? "hidden" : "block"}/>
      <ModalWallet display={open ? "block": "hidden"} closeValue={setOpen} />
    </div>
  );
};

const ModalWallet = (props) => {
  const [valueModal, setValueModal] = useState(0);
  function valuetext(value) {
    console.log(value);
    setValueModal(value);
    return `${value}°C`;
  }
  return (
    <div className={`containorWallet w-full h-full bg-transparent absolute backdrop-blur-md border ${props.display}`}>
      <div className="containorMiddle bg-white text-black flex justify-center w-[95%] p-4 flex-col items-center absolute top-36 left-2 rounded-md">
        <div className="containorMonitorFes flex justify-center flex-col items-center p-4 m-2 bg-white rounded-lg shadow-md">
          <h1>Amount to Send : <span>123</span></h1>          
          <h1>Amount to Address : <span>0x23456789</span></h1>          
          <h1>Gas Fees : <span className={valueModal <= 40 ? "text-red-500" : "text-green-500"}>{valueModal}</span></h1>          
        </div>
        <div className="gasFeesSlider w-full px-5 m-2">
          <h1 className="text-md font-sans font-semibold text-slate-600">
            Choose Your Gas Fees
          </h1>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </Stack>
        </div>
        <div className="buttons flex justify-around items-center w-full flex-col">
          <button className="py-3 bg-blue-500 w-full text-white rounded-md outline-none">
            Create Transaction!!
          </button>
          <button className="py-3 bg-white text-red-600 w-full border border-red-600 rounded-md outline-none m-2" onClick={()=>
          {
            props.closeValue(false);
          }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
