
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
// import ViewMore from "./components/ViewMore";
import BrownBox from "./components/BrownBox";
import Twin from "./Twin";
import Oval from "./Oval";
import UserGreeting from "./UserGreeting";
const App: React.FC = () => { 
    
  const content = "This is some example content to be displayed.";
  const previewLength = 100;
  const isExpanded = Boolean;
  return <div > 
     <NavBar />
       <TwoColumnLayout />    
       <BrownBox />
         <Message /> 
         <Twin />
         
         <MessageCard/>
         <FourColumnLayout />
         {/* <Cards name='Akin' /> */}
        
         <ListGroup />
         <Oval name='SpongeBob' age={40} isStudent={false}/>
         <UserGreeting isLoggedIn={false} username='Brocode'/>
        <PictureBg />
         <Footer />
       
       
    
  </div> 
} 

export default App;  