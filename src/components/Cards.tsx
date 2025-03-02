 import './Cards.css'
interface CardsProps {
        name: string; 
    }
const Cards: React.FC<CardsProps> = ({ name}) => {
    return (
<div>
      <h1>Hello, {name}</h1>
      
<h2 style={{textAlign: "center"}}>User Profile Card</h2>

<div className="card">
  <h1>John Doe</h1>
  <p className="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div style={{margin: '24px 0'}}>
    <a href="#"><i className="fa fa-dribbble"></i></a> 
    <a href="#"><i className="fa fa-twitter"></i></a>  
    <a href="#"><i className="fa fa-linkedin"></i></a>  
    <a href="#"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>
    
     </div> 
    )
}

export default Cards;