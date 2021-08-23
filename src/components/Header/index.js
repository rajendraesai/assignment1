import './index.css'

function Header() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-heading">Omega</h1>
      <div className="nav-items-container">
        <div className="items-container">
          <div className="select-card">
            <select className="select">
              <option>Demos</option>
            </select>
          </div>
          <p className="nav-item">Pages</p>
          <p className="nav-item">Support</p>
        </div>
        <button type="button" className="nav-button">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Header
