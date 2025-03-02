import './FourColumnLayout.css';
const FourColumnLayout = () => {
    return ( 
          <div className='container-two'>
            
            <div className="column-four">
                <a className='link' href='#' >
                <h2>Hiking</h2></a>
               <p>Hiking is life</p>
                
            </div>

             <div className="column-four">
                <a className='link' href='#'>
             <h2>Storytelling</h2></a>
             <p>Hiking is life</p>
               
             </div>

             <div className="column-four">
                <a className='link' href='#'>
                     <h2>Tour</h2></a>
             <p>Hiking is life</p>
                
             </div>
             <div className="column-four">
                <a className='link' href='#'>
                    <h2>Support</h2></a>
             <p>Hiking is life</p>
                
             
             </div>

          </div>
    )
}
export default FourColumnLayout; 