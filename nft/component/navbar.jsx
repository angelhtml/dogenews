import { Image } from '@chakra-ui/image';
import { HStack } from '@chakra-ui/layout';
import { useRouter } from 'next/router'
import { useState } from 'react';
import navbarStyle from '../styles/navbar.module.css'
import { Flex,Center } from '@chakra-ui/react'

function Navbar(){
    const router = useRouter()
return(
<div>

<div style={{position:"fixed",width:"100%",zIndex:'100'}} className={navbarStyle.desknav}>
    <div style={{backdropFilter: "blur(100px)",borderRadius:"0px 0px 15px 15px",boxShadow:"0 4px 10px 0 #eeff0042, 0 6px 20px 0 rgba(0, 0, 0, 0.1)",border:"1.5px solid rgba(255, 255, 255, 0.18)"}}>
    
    <div className={navbarStyle.navbar1}>
        <div className={navbarStyle.navbarbox1}>
        <HStack>
            <Image src="logo.png" width="2rem" className={navbarStyle.logo} />
            <span className={navbarStyle.logoname}>THE CLAN</span>
        </HStack>
        </div>
        <div className={navbarStyle.navbarbox2}>
        <div className={navbarStyle.links}>
            <a href="#gif" >About</a>
            <a href="#" >Gallery</a>
            <a href="#" >Collection</a>
            <button className={navbarStyle.button} onClick={() => router.push('https://opensea.io/asset/create')} >Mint</button>
        </div>
        </div>
    </div>  

    </div>
    </div>
    
        <Flex display={{base:"flex", padS:"none"}} style={{position:"sticky",backdropFilter: "blur(100px)",borderRadius:"0px 0px 15px 15px",boxShadow:"0 4px 10px 0 #eeff0042, 0 6px 20px 0 rgba(0, 0, 0, 0.1)",border:"1.5px solid rgba(255, 255, 255, 0.18)"}}>
    
            <center>
            <Image src="logo.png" width="3rem" marginLeft="45vw"/>
            </center>
        
        </Flex>

</div>
)
}
export default Navbar;