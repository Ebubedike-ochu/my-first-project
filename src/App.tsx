
import React, { useState } from 'react';
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import './App.css';
import './index.css';
import Message from './components/Message';
import TwoColumnLayout from "./components/TwoColumnLayout";
// import ThreeColumnLayout from "./components/ThreeColumnLayout";
import MessageCard from "./components/MessageCard"; 
import Footer from "./components/Footer";
import PictureBg from "./components/PictureBg";
import FourColumnLayout from "./components/FourColumnLayout";
// import ViewMore from "./components/ViewMore";
import BrownBox from "./components/BrownBox";
import Twin from "./Twin";
import Oval from "./Oval";
import UserGreeting from "./UserGreeting";
import BgToggler from './BgToggler';
// import Business from './Business';

const App: React.FC = () => { 
     
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (isDark: boolean) => {
      setIsDarkMode(isDark);
  };

  const content = "This is some example content to be displayed.";
  const previewLength = 100;
  const isExpanded = Boolean;

  return (
    <>
     <div>     
        <div
            style={{
                backgroundColor: isDarkMode ? '#333' : '#FFF',
                color: isDarkMode ? '#FFF' : '#000',
                height: 'auto',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s ease',
            }} >
            <div>
                <NavBar />
                <TwoColumnLayout />    
                <BrownBox />
                <Message /> 
                <Twin />

                <MessageCard/>
                <FourColumnLayout />
                {/* <Cards name='Akin' /> */}
                <ListGroup />
                <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
                <BgToggler onToggle={handleToggle} />
                <Oval name='SpongeBob' age={40} isStudent={false}/>
                <UserGreeting isLoggedIn={true} username='Brocode'/>
                {/* <Business /> */}
                <PictureBg />
                <Footer />
                
            </div>
        </div>
  </div> 
  </>
);
};

export default App;  