import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
            alt="website logo"
          />
        </div>

        <div className="nav-bar-large-container">
        <Link to="/">
            <img
              className="website-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                All Contacts
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/add-contact" className="nav-link">
                Add Contact
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <p>All Contacts</p>
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/add-contact" className="nav-link">
              Add Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header