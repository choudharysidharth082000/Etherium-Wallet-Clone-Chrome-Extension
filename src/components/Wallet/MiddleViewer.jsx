import React from 'react'
import axios from "axios";

const MiddleViewer = (props) => {
  const findTokenInDollar = async () =>
  {
    try {
      const findData = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR`);
      console.log(findData);
      
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(()=>
  {
    
  },[])
  return (
    <div className={`containorMiddle h-full w-full  flex flex-col justify-center items-center p-5 ${props.style}`}>
        <div className="image w-14 h-14">
            <img className='bg-contain' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAh1BMVEX///+MjIw0NDQUFBQ5OTk8PDuPj48vLy9lZWUqKio4ODcAAABoaGeBgYGJiYkzMzP19fXu7u4jIyMMDAz5+fnm5uasrKzGxsYXFxfT09OkpKSdnZ24uLi/v78bGxvOzs5MTEx3d3dDQ0Pd3d2Xl5dbW1uysrJnZ2deXl4fHx1RUVFxcXFOTk1ab7KRAAAGOUlEQVR4nO2dW3eqOhRGS7iJlFDxWi/UFm1r3f//9x1AIRcSqz1Dw1hZ83k/rM6RfCthJ/HpCUEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQpO+MTBfQPybbF9Ml9I7Z/t10CX1jSgfxq+kiekbgDKIP00X0izkNBmE2M11Gn5gkTukkXWDMMpa0ckIijNmWInFqJ8TFmG0InLOT1DddSl+Y08YJyZami+kHL+XMaZykLsZsxZIyJyQ6mi6nDxT1MGmcEPfNdEE9wHEEJ6lnuiDzbKjoBGP2HLC8k9S1/UvKkspOSPRsuiizFM0w4ZzYHrOOo3CSEtNlmaQJWNEJyVamCzNHG7CSEzK2N2ZXVOMkHJguzRQFN0xEJ2QxN12cIbhRIjtJU9PFmWF9wQnJdqbLM8GInzkdJ3bG7IpedBJ+my7w8byKw6TjxMaYFUeJwkkami7x0ax/dWJdzEoBq3RCxlPTZT6UlTxMVE7CvekyH4kcsGonJN+YLvSBdEaJ2kkamS70cXQCVuOEZIHpUh9FN2B1TuyJ2Z1imGic2BKzb6phonFC8rXpch+CapRonaSZ6XIfwedNTkhETRd8f6bKmaN3QsaF6ZLvjjJgLzkJf0yXfG/eNEr0TsDH7ESnxAm+dE7SbGK67LuiCdhSSbBPNU5IlJgu+55oA9Z59jM30kkBHbM7tRH6TYgXua6bqcdKuDVd+P1QBWwQJPuQeF7txHUP6tXsp+nS78VE8dUkeN/WRhon7jhXWElzqDE763yDDY4f6dDzeCcli26wQI1ZOWAD58tLvRbmpAoWS2I2kIM1JZ6ncdKJ2xDk5Z45f7AiSH5CwUjHiTsW4/YA8HIPF7BcsF5wIsUtxJhtA1YI1otOxLiFd7mnCVgpWH9zwsftGNrlnkAdrFc4aeMWWsxWAasK1qucNHEL6w5ldQdSGazXOSnJy2CBdYdy6WiC9WonddxCitki0QXrDU6qYAF0h/I5vzRprnfixoBidpn/OkyucBLHoM6cv7z/OlR+czKOvyBFbMXrNvtfTuIQTpYwPrPwz07iGNTahDFJFhcm0KU1W/wObwPYUPxk2kWK3knsw/yg1LCOdBNI5ySOQf4/4Bsfj8Hiln1xHPPnCjaAvt+vVlwbnX4rJ5DKyTj+xx3eGg1AnVqiCT8B5iS6ykk85g+D7vIIVNIWCaX8BFp1F7YdJ3HMHy7fkPAA7I7tmjrJiruSMzrKC1vJyTj+5v75dJ95ofP4su9LQB2a8BH59hFdcBJn3KCY0MPQH24fXfLdqQ/FUsoP/9kh1DiJY/4hh88o9X3/APCo7OkIKN1xf5qwM4y4aXPk2lTxLyqN+BHIxf3puQaazLjuUbCdYeskJlwav7yX06aEwHzYoTm3RRP+Vlu7M4yaacMPiFlWTZtqmIBqw4z2jjUNuA3MhJ52htFp2iTcH1/G8MmID60NM9hptmTJL2z31cI2qox8cLJGx9O0KQkBHxxmRwtowi9RN2FUOhF3e6sDORvxh4A+w3bgb6lQyn8B2C3ymF+TzYeh35IDbMMM/sCFtLBNuD+83CZ6TAnMNswQLkeKO0NG0AZJ3YahP/whHaQWd4Yn1iE3baphAu1zfYdCOtWW7MSwKH4iwYh/sOCOvny8vNwZsiXJJBGmTdWGgZ54FBHP+tVWmhVZu2xtAd2GGYprozSoJtDrhzRtqpkD+5N9y1xxxDyZTY/ytKny1ZrHH7uvFZTsw44Rf2jPwzAviisrwXN3lPgZ+DbMUL3hoHBysOkNh+51BJUTO9ow44pxMrTtYffOLbiuk9ySNszY0F+cRKAOal2HdPladjIE9X/DVyI1ZNlJZuM7flJDlpxkVrVhhtCQRScpoBPTt6F14g1Nl2YMviELTmzZDavg3+jmnNjYhhmsIXNOhuBfPLkIa8icEzvbMKN9hIs5yUCe/byF5gczWicp/irRk+TEs/qHIc40v9N0dpJDvH5xM6cXMc9OQsseF9ZRN+STk+E/08X0hPo/fE5ODpa3YUbVkGsn2IYZ1W+wlk4ItmHGpHbihUAPN/6NIimdHLANC6zpc2TN49PXshtsTZfQO0Zb0Icb/wauTBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE6T//AW3KaR412AqoAAAAAElFTkSuQmCC" alt="" />
        </div>
        <div className="divHEader">
            <h1 onClick={() => {navigator.clipboard.writeText(props.Balance.Balance)}} className='text-3xl font-semibold cursor-pointer'>{props.Balance.Balance} ETH</h1>
        </div>
        <div className="dollars my-2">
            <h1 className='text-small'>$ 0.00</h1>
        </div>
    </div>
  )
}

export default MiddleViewer