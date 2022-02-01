import { Center, HStack, VStack } from "@chakra-ui/layout";
import {FaFacebook } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {SiDiscord } from 'react-icons/si';
import footerStyle from "../styles/footer.module.css"
import { Button, ButtonGroup } from "@chakra-ui/react"

function Footer(){
    return(
        <div>
            <footer class={footerStyle.footer}>
                    <div class={footerStyle.container}>
                        <div class={footerStyle.socailmedia}>
                            <center>
                            <h1 class={footerStyle.socailtitle}>Community</h1>
                            </center>
                            <VStack marginTop='1rem'>
                            <a href='#' class={footerStyle.href}>Terms & Conditions </a>
                            <a href='#' class={footerStyle.href}>Privacy Policy</a>
                            <a href='#' class={footerStyle.href}>Create NFT</a>
                            </VStack>
                        </div>
                        <div class={footerStyle.socailmedia}>
                            <center>
                            <h1 class={footerStyle.about}>About us</h1>
                            </center>
                            <VStack marginTop='1rem'>
                            <a href='#' class={footerStyle.href}>Promote your project</a>
                            <a href='#' class={footerStyle.href}>Roadmap</a>
                            <a href='#' class={footerStyle.href}>FAQ</a>
                            </VStack>
                        </div>
                    </div>
                    <center>
                        <Center>
                        <HStack padding='1.5rem' spacing='1rem'>
                        <a href='#'><FaFacebook class={footerStyle.link}/></a>
                        <a href='#'><SiDiscord class={footerStyle.link}/></a>
                        <a href='#'><FaTwitter class={footerStyle.link}/></a>
                        <a href='#'><FaInstagram class={footerStyle.link}/></a>
                        </HStack>
                        </Center>
                    <hr color='#fbeec1' width='85%' marginTop='2.5rem'/>
                    </center>
                    <p style={{marginTop:'1rem',paddingLeft:'0.7rem',textShadow:'0px 2px 2px #fbeec1'}}>&copy; Bad Dies Cat 2022</p>
            </footer>
        </div>
    )
}
export default Footer;