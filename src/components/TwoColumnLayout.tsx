import './TwoColumnLayout.css';
import './Cards.css'
const TwoColumnLayout = () => {
 return (
    <div className='container'> 
      <div className='left-column'>
       
       {/* <p>Customer Support.</p> */}

<div className="card">
 
   { <img  src={'/Images/fineBoy.jpg'} alt='description' /> }
  <h1 style={{fontSize: "35px"}}>Ebubedike Ochu</h1>
  <p className="title">Customer Support.</p>
  <p>Educare Technology</p>
  <div style={{margin: '24px 10px                                                                                           '}}>
    <a href="#"><i className="fa fa-dribbble"></i></a> 
    <a href="#"><i className="fa fa-twitter"></i></a>  
    <a href="#"><i className="fa fa-linkedin"></i></a>  
    <a href="#"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>
    
       </div> 
           <div className='right-column '>  
         <h1 className='Two-column-h2'>My Profile.</h1>  
         <p id='Two-column-p'>My name is Chidiebere Ebubedike Ochu, I am from Enugu state, Nigeria. A graduate Accountant, A writter, Tech and Adventure enthusiants. Atque expedita similique exercitationem repellendus beatae eius eligendi. Nisi, pariatur itaque! Expedita dicta fuga ex? Perspiciatis rem nobis suscipit officiis eos porro?
            Distinctio dolor ducimus labore porro dolore illum optio eius voluptate! Odio natus iusto est, pariatur minus us, architecto cum aut neque molestiae blanditiis suscipit labore, et molestias!</p>  
            <p>Ebubedike Ochu is a from Enugu state Nigeria.  cumque earum quisquam quas dolore laborum accusamus incidunt rerum veniam, doloremque quod repellendus, eligendi id autem? Dignissimos iste, laudantium consectetur cum, dolore, necessitatibus blanditiis rem placeat numquam enim nulla.
            Quia perferendis, qui rem voluptates fugit nisi enim tenetur, velit tempore impedit placeat sunt aspernatur unde doloribus consequatur aut aliquam assumenda cupiditate? Error sint atque fuga minima sit, asperiores natus?
         </p> 
      </div>

    </div>
 )
}
export default TwoColumnLayout;