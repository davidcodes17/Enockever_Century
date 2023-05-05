// import {AiFillAppstore ,AiOutlineGoogle} from 'react-icons/ai'
import {FaGooglePlay,FaApple} from 'react-icons/fa'
import '../styles/appbody.css'
const AppBody = () => {
  return (
    <div>
        {/* <AiFillAppstore />
                        <AiOutlineGoogle /> */}
        <div className="app-body">
            <div className="mobile-app">
                <h1 className="mobile-text">Make Transactions <br />
                 as you go</h1>
                 <p className="mobile-sub">Mobile App avaliable  for download on:</p>
                 <div className="stores">
                    <div className="apple-store">
                        <FaApple className='app-icon' />
                        <span className="name-apps">Apple Store</span>                        
                    </div>
                    <div className="play-store">
                        <FaGooglePlay className='app-icons' />
                        <span className="name-app">Play Store</span>                        
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default AppBody