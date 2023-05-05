import '../styles/hero.css'
import { AiOutlineRight } from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='hero'>
        <h1 className="main-hero-text">
            95+ cryptocurrencies at your <br />
            fingertips on Century
        </h1>
        <p className="sub-hero">
        Buying and Selling cryptocurrency is made safe and easy with Century. <br />
        Start your cryptocurrency journey with Century now!
        </p>
        <div className="mr-input">
            <div className="inner-input">
              <input type="email" className="input-email" placeholder='Your Email Address' />
            </div>
            <button className="get-started"><AiOutlineRight className='get-icon' /><span className="text-get">Get Started</span></button>
        </div>
    </div>
  )
}

export default Hero