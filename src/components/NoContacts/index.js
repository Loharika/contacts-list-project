import { Link } from 'react-router-dom'
import './index.css'

const NoContacts = (props) => (
  <div className="no-contacts-container">
    
      <img src="https://venturebeat.com/wp-content/uploads/2012/02/contacts.jpg?fit=400%2C402&strip=all" alt="no-contacts-found" className="no-contacts-found"/>
      <h1>No {props.displayText} Contacts Found</h1>
      
        <Link to="/add-contact" className="nav-link">
          <div className="add-file-btn-container">
            <button
              type="button"
              className="no-contacts-add-contact-btn"
            >
            Add Contact
            </button>
          </div>
        </Link>
  </div>
)

export default NoContacts