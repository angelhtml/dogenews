import { useState, useEffect } from 'react';  
import axios from "axios"; 
import { Image } from '@chakra-ui/image';
import { BiSearch } from 'react-icons/bi';
import { SiDogecoin } from 'react-icons/si';
import { ChakraProvider,Input,InputGroup,InputLeftElement,HStack } from '@chakra-ui/react';
import HomeStyle from '../styles/Home.module.css';
import Tabbar from '../dogecompaile/Tabbar';
import Footer from '../dogecompaile/Footer';
import Marquee from "react-fast-marquee";
import { BiCaretUp } from 'react-icons/bi';
import { BiCaretDown } from 'react-icons/bi';
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/router'
   
function App(){
  const [bitcoinprice, setBitcoinPrice] = useState();
  const [bitcoinpercentchange24h, setBitcoinPercentchange24h] = useState();
  const [dogepercentchange24h, setDogePercentchange24h] = useState();
  const [dogeprice, setDogePrice] = useState();
  const [numindex, setindex] = useState();
  const [more, setmore] = useState(false);
  const [news, setNews] = useState([])
  const [Loading, setLoading] = useState(false)
  const[newsListLoading ,setNewsListLoading ]=useState( false)
  //=====================================================================================================
  const router = useRouter()
  useEffect(() => {
//====news==========    
  axios({
    method: 'GET',
    //url: './doge27.json'
    url: 'https://angelhtml.github.io/json/mydata.json',
  })
  .then(function (response) {
    const News = response.data.articles
    setLoading(true)
    setNews(News)
    setNewsListLoading(true)
  })
  .catch(function (error) {
    console.log(error);
  })
//====doge/price===========
  axios({
   method: 'GET',
   url:"https://api.coinpaprika.com/v1/tickers/doge-dogecoin"
   //url:"./data.json",
 })
 .then(function (response) {
 
   const dogePercentchange24h = response.data.quotes.USD.percent_change_24h
   setDogePercentchange24h(dogePercentchange24h)
 
   const dogePrice = response.data.quotes.USD.price.toFixed(7)
   setDogePrice(dogePrice)
  })
//====bitcoin/price========= 
axios({
  method: 'GET',
  url:"https://api.coinpaprika.com/v1/tickers/btc-bitcoin"
  //url:"./data.json",
})
.then(function (response) {

  const bitcoinPercentchange24h = response.data.quotes.USD.percent_change_24h
  setBitcoinPercentchange24h(bitcoinPercentchange24h)

  const bitcoinPrice = response.data.quotes.USD.price.toFixed(4)
  setBitcoinPrice(bitcoinPrice)
 }) 
},[])
//============================================================================================================
var dogeico = <BiCaretUp />
if (dogepercentchange24h > 0){
  dogeico = <BiCaretUp style={{color:"lime",fontSize:"1.3rem"}}/>
}else{
  dogeico = <BiCaretDown style={{color:"red",fontSize:"1.3rem"}}/>
}

var bitcoinico = <BiCaretUp />
if (bitcoinpercentchange24h > 0){
  bitcoinico = <BiCaretUp style={{color:"lime",fontSize:"1.3rem"}}/>
}else{
  bitcoinico = <BiCaretDown style={{color:"red",fontSize:"1.3rem"}}/>
}


function extra (index){
  setindex(index)
  setmore(!more)
  }
  //=========================================================================================================
  return (
    <div>
            <div className={HomeStyle.navbar}>
        <div className={HomeStyle.navbar1}>
          <HStack marginTop="0.3rem" marginLeft="1rem">
          <SiDogecoin style={{color:"yellow",fontSize:"1.5rem"}}/>
          <p color="white">Doge news</p>
                <InputGroup style={{width:"20vw"}}>
                    <InputLeftElement pointerEvents='none' height="1.6rem" children={<BiSearch color='white'/>}
                    />
                    <Input  type='tel' size='xs' placeholder='Search' style={{color:"white",border:"2px solid white",borderRadius:"30px"}} _placeholder={{color:"white"}}/>
                </InputGroup>
            </HStack>
        </div>
        <div className={HomeStyle.navbar2}>
        <div className={HomeStyle.links}>
            <a href="#">News</a>
            <a href="#">Market</a>
            <a onClick={() => router.push('/pumps')}>opinion</a>
          </div>
        </div>
      </div>

      <div className={HomeStyle.mobilenav}><center><SiDogecoin style={{color:"yellow",fontSize:"1.5rem",position:'relative',top:'0.2rem'}}/></center></div>

      <div><Image src="1635779886.gif" className={HomeStyle.ad}/></div>
      <Marquee gradientColor='0, 2, 92' speed='50' style={{textShadow:"0 1px 1px yellow",marginTop:"1rem"}}><pre style={{display:"flex"}}>                 DOGE  {dogeico}{dogeprice}  {dogeico}%{dogepercentchange24h} 24h                 BTC  {bitcoinico}{bitcoinprice}  {bitcoinico}%{bitcoinpercentchange24h} 24h</pre></Marquee>


      { newsListLoading  ? <>
      
      <center>
      <div className={HomeStyle.newsbox} marginTop="2rem">
      {Loading && news.map((news, index)=>
      <div key={news}>
        
      <div className={HomeStyle.newsbox1} onClick={() => setmore(()=> extra(index))}><center><div className={HomeStyle.news}><Image src='retro-bg.jpg' width="100%"/></div></center><p className={HomeStyle.title}>{news.title.substring(0, 50)}</p></div>
      
      </div>)}
      </div>
      </center>
      </>
      :
      <SkeletonTheme baseColor="#210036" highlightColor="#34005c" className={homeStyle.newsbox1}>
      <Skeleton count={1} style={{position:"relative",left:"5%",marginTop:"1rem"}} height="40vh" width="89%"/>
      <Skeleton count={1} style={{position:"relative",left:"5%",marginTop:"1rem"}} height="40vh" width="89%"/>
      <Skeleton count={1} style={{position:"relative",left:"5%",marginTop:"1rem"}} height="40vh" width="89%"/>
      </SkeletonTheme>
      }


      {more && 
      <div style={{position:"fixed" , height:"100%" , width:"100%" , background:"rgba(195, 121, 255, 0.645)", top:"0" , left:"0"}} onClick={() => setmore(!more)} className={HomeStyle.boxanime}>
       <div style={{height :"100vh", position:"fixed" ,overflow:"auto",marginLeft:"5%" ,top:"5vh" ,width: "90vw" , background:"#0c0029" ,zIndex:"99999",borderRadius:'15px'}} overflow='auto' onClick={(e) => e.stopPropagation()}>
       <p className={HomeStyle.title}>{news[numindex].title}</p>
       <div className={HomeStyle.infobox}>
       <div className={HomeStyle.infobox1}><Image src='retro-bg.jpg'/><div style={{marginTop:'1rem'}}><span style={{padding:"1rem",textShadow:"0 1px 1px #f0f"}}>published at:</span><span style={{textShadow:"0 1px 1px black"}}>{news[numindex].published}</span></div><div><span style={{padding:"1rem",textShadow:"0 1px 1px #f0f"}}>Author:</span><span style={{textShadow:"0 1px 1px black"}}></span></div></div>
       <div className={HomeStyle.infobox2}><p style={{padding:"1rem",textShadow:"0 1px 1px #f0f"}}>description:</p><p  style={{padding:"1rem",textShadow:"0 1px 1px black"}}>{news[numindex].title.substring(0, 160)}...</p><center><a href={news[numindex].link} className={HomeStyle.seemorelink}>See more</a></center></div>
       </div>
        </div>
      </div>
      }
      <Tabbar />
      <Footer />
  </div>
  )
}
export default App


