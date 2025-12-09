import './TwoColumnLayout.css';
import './Cards.css'
const TwoColumnLayout = () => {
 return (
    <div className='container'> 
      <div className='left-column'>
       
       {/* <p>Customer Support.</p> */}

<div className="card">
 
   { <img  src={'/Images/fineBoy-R.png'} id='first-image' alt='description' /> }
  <h1 className='Two-column-h1'>Ebubedike Ochu</h1>
  <p className="title">Customer Support.</p>
  <p>Educare Technology</p>
  <div style={{margin: '24px 10px                                                                                           '}}>
    <a href="#"><i className="fa fa-dribbble"></i></a> 
    <a href="#"><i className="fa fa-twitter"></i></a>  
    <a href="#"><i className="fa fa-linkedin"></i></a>  
    <a href="#"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><button className='twin'>Contact</button></p>
</div>
    
       </div> 
           <div className='right-column '>  
         <h1 className='Two-column-h1'>ABOUT CHIDIEBERE EBUBEDIKE OCHU </h1> 
         <h1 className='Two-column-h2'>Writers and Manuscript.</h1> 
         <p id='Two-column-p'>My name is Chidiebere Ebubedike Ochu, I am from Enugu state, Nigeria. A graduate Accountant, A writter, Tech and Adventure enthusiants. Atque expedita similique exercitationem repellendus beatae eius eligendi. Nisi, pariatur itaque! Expedita dicta fuga ex? Perspiciatis rem nobis suscipit officiis eos porro?
            Distinctio dolor ducimus labore porro dolore illum optio eius voluptate! Odio natus iusto est, pariatur minus us, architecto cum aut neque molestiae blanditiis suscipit labore, et molestias!</p>  
            
         <ul> 
          <li>Creative</li>
          <li>Team player</li>
          <li>Policy Making </li>
          <li>Tech Enthusiats</li>
          <li>Adrenaline Junkie</li>
          <li>Well Manner</li>
         </ul>
         <button className='button-two'>Read More</button>
      </div>

    </div>
 )
}
export default TwoColumnLayout;