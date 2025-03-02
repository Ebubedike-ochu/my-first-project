
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import './App.css';
import './index.css';
import Message from './components/Message';
import TwoColumnLayout from "./components/TwoColumnLayout";
import ThreeColumnLayout from "./components/ThreeColumnLayout";
import MessageCard from "./components/MessageCard"; 
import Footer from "./components/Footer";
import PictureBg from "./components/PictureBg";
import FourColumnLayout from "./components/FourColumnLayout";
import ViewMore from "./components/ViewMore";
import BrownBox from "./components/BrownBox";
import ViewLess from "./ViewLess";

const App: React.FC = () => { 
  const content = <ThreeColumnLayout />;
    
  return <div > 
     <NavBar />
       <TwoColumnLayout />    
       <BrownBox />
         <Message /> 
         <ViewLess />
         <MessageCard />
         <FourColumnLayout />
         {/* <Cards name='Akin' /> */}
      
         <ListGroup />
        <PictureBg />
         <Footer />
       
       
    
  </div> 
} 

export default App;  