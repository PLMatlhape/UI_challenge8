import './navBar.css' 

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-parts">
        <img src="\assets\images\Olipop-Logo.png" alt="Logo" />
        <div className='nav-links'>
          <a href="/shop">Shop Online</a>
          <a href="/find">Find In Store</a>
          <a href="/learn">Learn More</a>
        </div>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </nav>
  )
}