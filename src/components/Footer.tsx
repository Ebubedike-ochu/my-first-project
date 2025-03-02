import './Footer.css'
const Footer = () => {
   return (
     <div className='Footer'>
        
        <div className='container-three'>
            <div className='column'>
                <p className='footer-p'>Ebubdeike Ochu is a gifted storyteller, and also a Tech entuisiant.</p >
                <img className='footer-img' src={'./Images/Ebube.png'} alt='ebube' />
            </div>
            <div className='column'>
                <p className='footer-p'><strong>About Us</strong></p>
            
                <p className='footer-p'>copyright Notice</p >
                <p className='footer-p'>Information</p>
                <p className='footer-p'>Terms and Condition</p>
            </div>
            <div className='column'>
                <p className='footer-p'>Contact Info</p>
                <p className='footer-p'>Contactcentre@ebubedikeochu</p>
                <p className='footer-p'>08061304704</p>
                <p className='footer-p'>16B Alhaji Hussieni Summonu Street.</p>
                </div>
           
        </div>
        <div className='content'>
            <hr />
            <h6 className='footer-h6'>Built by Ebubedike Ochu.</h6>
        </div>
        
         
     </div>
   )
}

 export default Footer;