// src/ViewMore.js
import './FourColumnLayout.css'
import './ViewMore.css'
import React, { useState } from 'react';

interface viewMoreProps {
    content: string;
    previewLength: number;
}
const ViewMore: React.FC<viewMoreProps> =  ({ content, previewLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleViewMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='content'>
      <p>
        {isExpanded ? content : `${content.substring(0, previewLength)}... Ebubedike Ochu is one of the  people telling our stories and reshaping the narrative `}
        love is beautiful thing 
      </p>
      <button onClick={toggleViewMore}>
        {isExpanded ? "View More" : "View Less"}
      </button>
    </div>
  );
};

export default ViewMore;
