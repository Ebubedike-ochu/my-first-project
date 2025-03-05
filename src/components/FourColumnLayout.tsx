import './FourColumnLayout.css';
const FourColumnLayout = () => {
    return ( 
          <div className='container-two'>
            
            <div className="column-four">
                <a className='link' href='#' >
                <h2 className='columnFour'>Hiking</h2></a>
               <p>Hiking is life</p>
                
            </div>

             <div className="column-four">
                <a className='link' href='#'>
             <h2 className='columnFour'>Storytelling</h2></a>
             <p>Hiking is life</p>
               
             </div>

             <div className="column-four">
                <a className='link' href='#'>
                     <h2 className='columnFour'>Tour</h2></a>
             <p>Hiking is life</p>
                
             </div>
             <div className="column-four">
                <a className='link' href='#'>
                    <h2 className='columnFour'>Support</h2></a>
             <p>Hiking is life</p>
                
             
             </div>

          </div>
    )
}
export default FourColumnLayout; 