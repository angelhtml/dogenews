import { SiEthereum } from 'react-icons/si';
import { VirtuosoGrid } from 'react-virtuoso'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic';
const Tilty = dynamic(() => import("react-tilty"), {
ssr: false
});

import {
Flex,Text,Box
} from '@chakra-ui/react'

function Gallery(){
return(
<>
    <div>
        <Text className="line-divider"><span className="span-line-divider">Ape Clan</span></Text>
        <VirtuosoGrid className="style-7" style={{height:"30rem" , width:"90%", margin:"auto"}} totalCount={10000}
            overscan={200} components={{
        Item: ItemContainer,
        List: ListContainer,

      }} itemContent={index=>
            <Tilty style={{ transformStyle: 'preserve-3d' }}>
                <Flex borderRadius="0px" margin="1rem" alignItems="center" flexDirection="column" width="10rem"
                    cursor="pointer" height="19rem">

                    <Box style={{ transform: 'translateZ(30px)' }} borderRadius="0 0px 10px 10px" width="10rem"
                        height="10rem" margin="0rem" backgroundImage="s7.jpg" backgroundSize="cover"
                        backgroundRepeat="no-repeat" boxShadow="0 5px 10px 5px #454500"
                        style={{transformStyle: "preserve-3d"}}>
                    </Box>
                    <Text marginTop="0.7rem" textShadow="0 1px 1px yellow">The Clan</Text>
                    <p style={{padding:"10px"}}>your description is here...</p>
                    <div style={{display:"flex",width:"100%"}}>
                        <SiEthereum style={{marginLeft:"10%",marginTop:"0.8rem"}} />
                        <span style={{marginTop:"0.7rem"}}>9999</span>
                    </div>
                </Flex>
            </Tilty>}

            />
    </div>
    <div>
        <Text className="line-divider"><span className="span-line-divider">Cat Clan</span></Text>
        <VirtuosoGrid className="style-7" style={{height:"30rem" , width:"90%", margin:"auto"}} totalCount={10000}
            overscan={200} components={{
   Item: ItemContainer,
   List: ListContainer,

 }} itemContent={index=>
            <Tilty style={{ transformStyle: 'preserve-3d' }}>
                <Flex borderRadius="0px" margin="1rem" alignItems="center" flexDirection="column" width="10rem"
                    cursor="pointer" height="19rem">

                    <Box style={{ transform: 'translateZ(30px)' }} borderRadius="0 0px 10px 10px" width="10rem"
                        height="10rem" margin="0rem" backgroundImage="s5.jpg" backgroundSize="cover"
                        backgroundRepeat="no-repeat" boxShadow="0 5px 10px 5px #454500"
                        style={{transformStyle: "preserve-3d"}}>
                    </Box>
                    <Text marginTop="0.7rem" textShadow="0 1px 1px yellow">The Clan</Text>
                    <p style={{padding:"10px"}}>your description is here...</p>
                    <div style={{display:"flex",width:"100%"}}>
                        <SiEthereum style={{marginLeft:"10%",marginTop:"0.8rem"}} />
                        <span style={{marginTop:"0.7rem"}}>9999</span>
                    </div>
                </Flex>
            </Tilty>}

            />
    </div>
    <div>
        <Text className="line-divider"><span className="span-line-divider">Bulldog Clan</span></Text>
        <VirtuosoGrid className="style-7" style={{height:"30rem" , width:"90%", margin:"auto"}} totalCount={10000}
            overscan={200} components={{
   Item: ItemContainer,
   List: ListContainer,

 }} itemContent={index=>
            <Tilty style={{ transformStyle: 'preserve-3d' }}>
                <Flex borderRadius="0px" margin="1rem" alignItems="center" flexDirection="column" width="10rem"
                    cursor="pointer" height="19rem">

                    <Box style={{ transform: 'translateZ(30px)' }} borderRadius="0 0px 10px 10px" width="10rem"
                        height="10rem" margin="0rem" backgroundImage="s8.jpg" backgroundSize="cover"
                        backgroundRepeat="no-repeat" boxShadow="0 5px 10px 5px #454500"
                        style={{transformStyle: "preserve-3d"}}>
                    </Box>
                    <Text marginTop="0.7rem" textShadow="0 1px 1px yellow">The Clan</Text>
                    <p style={{padding:"10px"}}>your description is here...</p>
                    <div style={{display:"flex",width:"100%"}}>
                        <SiEthereum style={{marginLeft:"10%",marginTop:"0.8rem"}} />
                        <span style={{marginTop:"0.7rem"}}>9999</span>
                    </div>
                </Flex>
            </Tilty>}

            />
    </div>
</>
)
}
export default Gallery;

const ItemContainer = styled.div`

`



const ListContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-around;
`