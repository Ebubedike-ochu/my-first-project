
import React, { useState } from "react";

interface BgTogglerProps {
    onToggle: (isDarkMode: boolean) => void;
}
const BgToggler: React.FC<BgTogglerProps> = ({ onToggle}) => {
     const [isDarkMode, setIsDarkMode] = useState(false);

     const toggleBackground = () => {
         const newMode = !isDarkMode;
         setIsDarkMode(newMode);
         onToggle(newMode); // inform the parent componet
     };
     return (
               <div className="content">
                <button className="twin" onClick={toggleBackground} style={{ padding: '10px 15px', fontSize: '16px'}}>
                        {isDarkMode ? 'Light Mode' : ' Dark Mode'}
                </button>
               </div>
     )
}

export default BgToggler;