  import './ThreeColumnLayout.css';
//  import './TwoColumnLayout.css';

interface ThreeColumnLayoutProps {
  content: string;
  previewLength: number;
  isExpanded: boolean;

}
const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({content, previewLength, isExpanded })=> {
  // console.log(previewLength)
    return (    
              <div className='content'>
                
          <div className='container-three'> 
            
            <div className="column">
               <div className='image-container'>
                <img className='Images'  src={'/Images/nneohe.png'} alt='forest'/>
               </div>
                
            </div>
                
             <div className="column">
               <img className='Images'  src={'/Images/onwubiko.png'} alt='forest'/>
             </div>

             <div className="column">
                <img className='Images'  src={'/Images/ironbed.png'} alt='forest'/>
             </div>
            </div>
            {isExpanded ?
            <div className='container-three'> 
            
            <div className="column">
               <div className='image-container'>
                <img className='Images'  src={'/Images/nne.jpg'} alt='forest'/>
               </div>
                
            </div>
                
             <div className="column">
               <img className='Images'  src={'/Images/yearning.jpg'} alt='forest'/>
             </div>

             <div className="column">
                <img className='Images'  src={'/Images/ironbed.png'} alt='forest'/>
             </div>
             
            </div>:  ""}
          </div>
   
    )
}
export default ThreeColumnLayout;