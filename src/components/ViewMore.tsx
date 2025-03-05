// src/ViewMore.js
import './FourColumnLayout.css'
import './ViewMore.css'


interface viewMoreProps {
    content: string;
    previewLength: number;
    isExpanded: boolean;
}
const ViewMore: React.FC<viewMoreProps> =  ({ content, previewLength, isExpanded }) => {


  return (
    <div className='content'>
      <p>
        {isExpanded ? content : `${content.substring(0, previewLength)}... Ebubedike Ochu is one of the  people telling our stories and reshaping the narrative `}
        love is beautiful thing 
      </p>
      
    </div>
  );
};

export default ViewMore;
