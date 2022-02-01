import { useSpringCarousel } from 'react-spring-carousel-js';


import { BiArrowToLeft,BiArrowToRight } from 'react-icons/bi';

import { Flex,Text,Box } from '@chakra-ui/react'

function Bids(){
    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
      } = useSpringCarousel({
        withLoop: true,
        itemsPerSlide: 5,
        items: [
  
            {id: "CarouselItem-1",
            renderItem:
            <Flex justifyContent="space-around" alignItems="center" flexDirection="column" width="11rem" height="20rem">
                <Box   width="11rem" height="9.7rem" backgroundImage="s3.jpg" backgroundSize="cover" backgroundRepeat="no-repeat" ></Box>
                <Box   width="11rem" height="9.7rem"  backgroundImage="s4.jpg" backgroundSize="cover" backgroundRepeat="no-repeat"></Box>
            </Flex>
        },
        {id: "CarouselItem-1",
            renderItem:
            <Flex justifyContent="space-around" alignItems="center" flexDirection="column" width="11rem" height="20rem">
                <Box   width="11rem" height="9.7rem" backgroundImage="s1.jpg" backgroundSize="cover" backgroundRepeat="no-repeat" ></Box>
                <Box   width="11rem" height="9.7rem"  backgroundImage="s2.jpg" backgroundSize="cover" backgroundRepeat="no-repeat"></Box>
            </Flex>
        },
        {id: "CarouselItem-1",
            renderItem:
            <Flex justifyContent="space-around" alignItems="center" flexDirection="column" width="11rem" height="20rem">
                <Box   width="11rem" height="9.7rem" backgroundImage="s4.jpg" backgroundSize="cover" backgroundRepeat="no-repeat" ></Box>
                <Box   width="11rem" height="9.7rem"  backgroundImage="s3.jpg" backgroundSize="cover" backgroundRepeat="no-repeat"></Box>
            </Flex>
        },
        {id: "CarouselItem-1",
            renderItem:
            <Flex justifyContent="space-around" alignItems="center" flexDirection="column" width="11rem" height="20rem">
                <Box   width="11rem" height="9.7rem" backgroundImage="s2.jpg" backgroundSize="cover" backgroundRepeat="no-repeat" ></Box>
                <Box   width="11rem" height="9.7rem"  backgroundImage="s1.jpg" backgroundSize="cover" backgroundRepeat="no-repeat"></Box>
            </Flex>
        },
        {id: "CarouselItem-1",
            renderItem:
            <Flex justifyContent="space-around" alignItems="center" flexDirection="column" width="11rem" height="20rem">
                <Box   width="11rem" height="9.7rem" backgroundImage="s3.jpg" backgroundSize="cover" backgroundRepeat="no-repeat" ></Box>
                <Box   width="11rem" height="9.7rem"  backgroundImage="s4.jpg" backgroundSize="cover" backgroundRepeat="no-repeat"></Box>
            </Flex>
        }
         
        ],
      });
    return(
        <div>
            <Text className="line-divider" ><span className="span-line-divider" >HOT BIDS</span></Text>
            <Box position="relative" width="100%">
       <Box zIndex="10" width="1.8rem" left="1rem" top="9rem" position="absolute" height="1.8rem" borderRadius="50%" background="yellow" onClick={slideToPrevItem} boxShadow="2px 2px 20px 4px black" cursor="pointer" _hover={{boxShadow:"2px 2px 20px 6px black"}}><BiArrowToLeft style={{width:"100%",height:"100%",color:"black"}}/></Box>
       <Box width="100%" >{carouselFragment}</Box>
       <Box zIndex="10" width="1.8rem"  right="1rem" top="9rem" position="absolute" height="1.8rem" borderRadius="50%" background="yellow" onClick={slideToNextItem} boxShadow="2px 2px 20px 4px black" cursor="pointer" _hover={{boxShadow:"2px 2px 20px 6px black"}}><BiArrowToRight style={{width:"100%",height:"100%",color:"black"}}/></Box>
     </Box>
        </div>
    )
}
export default Bids;