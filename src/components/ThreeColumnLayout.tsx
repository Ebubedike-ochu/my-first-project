  import './ThreeColumnLayout.css';
//  import './TwoColumnLayout.css';
const ThreeColumnLayout = () => {
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

          </div>
   
    )
}
export default ThreeColumnLayout;