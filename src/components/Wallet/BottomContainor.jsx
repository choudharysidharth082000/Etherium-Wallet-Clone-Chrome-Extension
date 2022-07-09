import React from 'react'
import {useState } from "react";
const BottomContainor = (props) => {
  const [isCoped, setIsCopied] = useState(false);
  return (
    <div className="containorBottom w-full flex flex-col justify-center items-center border border-x-slate-300 p-4 bg-slate-50">
        <h1 className='font-semibold text-gray-700'>Account</h1>        
        <h1 onClick={() => {navigator.clipboard.writeText(props.Address.WalletAddress);
        setIsCopied(true)}} className={isCoped ? "text-green-600 cursor-pointer transition-all" : "text-slate-600 cursor-pointer hover:text-green-600 transition-all"}>{props.Address.WalletAddress?.substring(0, 5)}...{props.Address.WalletAddress?.substring(props.Address.WalletAddress?.length - 5)}</h1>
    </div>
  )
}

export default BottomContainor