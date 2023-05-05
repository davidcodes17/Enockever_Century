import '../styles/header.css'
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
            <img src="/public/Logo.svg" alt="" className="logo-img" />
            <h1 className="logo-text">century</h1>
        </div>

        <div className="nav">
            <a href="#" className="nav-list">Wallet</a>
            <a href="#" className="nav-list">Exchange</a>
            <a href="#" className="nav-list">Business</a>
            <a href="#" className="nav-list">Developers</a>
            <a href="#" className="nav-list">Learn</a>
        </div>

        <div className="btns">
            <button className="btn sign-in">Sign In</button>
            <button className="btn sign-up">Sign Up</button>
        </div>

        <div className="icons">
          <img src="/Instagram.svg" alt="" />
          <img src="/LinkedIn.svg" alt="" />
          <img src="/Discord.svg" alt="" />
          <img src="/Twitter.svg" alt="" />
        </div>
        </div>  
        {/* <img src="/public/mobile.png" alt="" className='text' /> */}
        {/* <h1 className="boom"></h1> */}
    </>
  )
}

export default Header