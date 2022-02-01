import Navbar from '../component/navbar';
import Herro from '../component/herro';
import Footer from "../component/footer"   
import Gif from "../component/gif"
import Hots from  "../component/bids"
import Bcc from "../component/bcc"
import Gallery from "../component/gallery";
import Tabbar from "../component/Tabbar";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function App(){
  return (
    <div>
      <Navbar />
      <Herro />
      <ScrollAnimation animateIn="animate__fadeIn" offset='200' duration={2}>
      <Gif/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInLeft" offset='200' duration={2}>
      <Bcc/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn" offset='200' duration={2}>
      <Hots/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__backInUp" offset='150' duration={2}>
      <Gallery/>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__slideInUp" offset='150' duration={2}>
      <Footer/>
      </ScrollAnimation>
      <Tabbar />
    </div>
  )
}
export default App