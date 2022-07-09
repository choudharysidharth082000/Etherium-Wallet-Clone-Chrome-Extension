import React from 'react'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import SendIcon from '@mui/icons-material/Send';

const ButtonSection = (props) => {
  return (
    <div className="containorButton w-full py-4 px-9 flex justify-around items-center">
        <button className='w-14 h-14 bg-blue-500 text-white rounded-full' onClick={()=>
        {
          window.location.href ="https://rinkebyfaucet.com/"
        }}><DownloadForOfflineIcon /></button>
        <button className='w-14 h-14 bg-blue-500 text-white rounded-full' onClick={()=>
        {
          props.isClickedButton(true);
        }}><SendIcon /></button>
        <button className='w-14 h-14 bg-blue-500 text-white rounded-full' onClick={()=>
        {
          window.location.href ="https://prodigal-swap.vercel.app/"
        }}><SwapHorizontalCircleIcon /></button>
    </div>
  )
}

export default ButtonSection