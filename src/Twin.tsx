import ThreeColumnLayout from "./components/ThreeColumnLayout";
import ViewMore from "./components/ViewMore";
import React, { useState } from 'react';

interface TwinProps {
    content: string;
    previewLength: number;
}

const Twin =  () => {
 const [isExpanded, setIsExpanded] = useState(false);

 const toggleTwin = () => {
    setIsExpanded(!isExpanded);
  };
  const content = "This is some example content to be displayed.";
  const previewLength = 100;

    return (
        <div>
         <ThreeColumnLayout content={content} previewLength={previewLength} isExpanded={isExpanded}/>
         {/* <ViewMore content={content} isExpanded={isExpanded} /> */}
         <button onClick={toggleTwin}>
              {isExpanded ? "View Less" : "View More"}
      </button>

        </div>
    );
 };
 export default Twin;