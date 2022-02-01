import { useState,useEffect } from 'react';  
import axios from "axios"; 
   
function App(){
  const [so, setSo] = useState([])
  const [sell, setSell] = useState([])
  const [mycoin, setCoin] = useState([])
  const [numbuy, setNumbuy] = useState([])
  const [numsell, setNumsell] = useState([])
  const [usdt, setUsdt] = useState([])
  const [myvolum24, setVolum24] = useState([])
  const [Content, setContent] = useState()
  const [Loading, setLoading] = useState(false)
  const [Loading1, setLoading1] = useState(false)
  useEffect(() => {
  axios({
    method: 'get',
    url: `https://api.nobitex.ir/v2/orderbook/XLMIRT`,
  })
  .then(function (response) {
    const buy = response.data.asks[0].reverse().slice(1)
    const Numbuy = response.data.asks[0].reverse().slice(1)
    const Sell = response.data.bids[0].reverse().slice(1)
    const NumSell = response.data.bids[0].reverse().slice(1)
    setNumbuy(Numbuy)
    setNumsell(NumSell)
    setSell(Sell)
    setSo(buy)
    setLoading(true)
  });
  axios({
    method: 'get',
    url: `https://api.nobitex.ir/v2/trades/USDTIRT`
  })
  .then(function (response) {
    const theter = response.data.trades[0].price
    setUsdt(theter)
  })
},[])
useEffect(() => {
  //test
  axios({
    method: 'get',
    url: `https://api.coinpaprika.com/v1/tickers/xlm-stellar`,
  })
  .then(function (response) {
    const coinprice = response.data.quotes.USD.price.toFixed(4)
    const volum24 = response.data.quotes.USD.volume_24h_change_24h
    console.log(volum24)
    setCoin(coinprice)
    setVolum24(volum24)
    setLoading1(true)
  })
},[])
//===================color==============
var xlmt = (mycoin*usdt/10).toFixed(0)
var my = 'yellow';
var xx = '🟡'
if (so> xlmt){
  my='lime'
  xx='🔺'
}else{
  my='red'
  xx='🔻'
}
//======================================
var volumcolor = 'yellow';
var label = '🟡'
if (myvolum24>0){
  volumcolor = 'lime'
  label='🔺'
}else{
  volumcolor = 'red'
  label='🔻'
}


  return (
    <div style={{}}>
      { Loading && so.map(e=><div key={so}><div>🛒buy XLM:<span style={{color:my,fontSize:"2rem",padding:"1rem"}}>{xx}{so/10} 🟡{numbuy}</span></div>
      <div>🎇Sell XLM:<span style={{color:my,fontSize:"2rem",padding:"1rem"}}>{xx}{sell/10} 🟡{numsell}</span></div>  
      </div>
      )}
      { Loading1 && so.map(e=><><div key={so}>xlm ➡{mycoin}</div><div>usdt ➡{usdt/10}</div><div>xlm-ir ➡{xlmt}</div><div>volum in 24h:<span style={{color:volumcolor,fontSize:"1.3rem"}}>{label}%{myvolum24}</span></div></>)}

    </div>
  )
}
export default App