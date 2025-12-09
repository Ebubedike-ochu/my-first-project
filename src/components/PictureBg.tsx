import './pictureBg.css'
const PictureBg = () => {
    return ( 
             <div className='image-container'>
            <img className='image-bg' src={'./Images/sudan.png'}  alt=''/>
            <div className='content'>  
                <h1 className='pictureBg'>Tales By Moonlight</h1>
        <p> The Power of storytelling in stuck in between creative and conssitency!</p>
        <button>click me</button>
            </div>
            
            {/* <div className='pictureBg'> */}
        </div>
        
    )
}

export default PictureBg;