import { AiFillHome } from 'react-icons/ai';
import { GiMiner } from 'react-icons/gi';
import { BsCollectionFill } from 'react-icons/bs';
import { useRouter } from 'next/router'
import { FaHotjar } from 'react-icons/fa';
import { Flex,Text } from '@chakra-ui/react'
import tabbarStyle from '../styles/tabbar.module.css'

function Tabbar(){
    const router = useRouter()
    return(
        <div>
<Flex display={{base:"flex", padM:"none"}} justifyContent="space-around" borderRadius="50% 50% 10% 10% / 15% 15% 0% 0%" zIndex="999" width="100%" bottom="0" position="fixed" overflow="hidden" height="4.5rem" background="black" borderTop="3px solid yellow" >

<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer"> <AiFillHome style={{height:"40%" , width:"40%" }} /> <Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700">HOME</Text>  </Flex>
<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer" onClick={() => router.push('https://opensea.io/asset/create')}> <GiMiner style={{height:"40%" , width:"40%" }} /> <Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700">MINT</Text> </Flex>
<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer" > <BsCollectionFill style={{height:"40%" , width:"40%" }} /><Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700" >COLLECTION</Text> </Flex>
<Flex direction="column" justifyContent="center" alignItems="center" height="5rem" width="25%" className="button-three" className={tabbarStyle.button} cursor="pointer" > <FaHotjar style={{height:"40%" , width:"40%" }} /> <Text fontFamily="Vazir-Bold" fontSize="0.8rem" fontWeight="700">HOT</Text> </Flex>

</Flex>
        </div>
    )
}
export default Tabbar