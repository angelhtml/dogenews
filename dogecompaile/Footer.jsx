import { Center, HStack, VStack } from "@chakra-ui/layout";
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {SiDiscord } from 'react-icons/si';
import FooterStyle from "../styles/Footer.module.css"

function Footer(){
    return(
        <div>
            <footer class={FooterStyle.footer}>
                    <div class={FooterStyle.container}>
                        <div class={FooterStyle.socailmedia}>
                            <center>
                            <h1 class={FooterStyle.socailtitle}>Community</h1>
                            </center>
                            <VStack marginTop='1rem'>
                            <a href='#' class={FooterStyle.href}>Terms & Conditions </a>
                            <a href='#' class={FooterStyle.href}>Market</a>
                            </VStack>
                        </div>
                        <div class={FooterStyle.socailmedia}>
                            <center>
                            <h1 class={FooterStyle.about}>About us</h1>
                            </center>
                            <VStack marginTop='1rem'>
                            <p class={FooterStyle.href} style={{cursor:"pointer"}}>Roadmap</p>
                            <a href='#' class={FooterStyle.href}>FAQ</a>
                            </VStack>
                        </div>
                    </div>
                    <center>
                        <Center>
                        <HStack padding='1.5rem' spacing='1rem'>
                        <a href='#'><SiDiscord class={FooterStyle.link}/></a>
                        <a href='#'><FaTwitter class={FooterStyle.link}/></a>
                        <a href='#'><FaInstagram class={FooterStyle.link}/></a>
                        </HStack>
                        </Center>
                    <hr color='#a200ff' width='85%' marginTop='2.5rem'/>
                    </center>
                    <p style={{color:"white",marginTop:'1rem',paddingLeft:'0.7rem',textShadow:'0px 2px 2px #a200ff'}}>&copy; Doge news 2022</p>
            </footer>
        </div>
    )
}
export default Footer;
