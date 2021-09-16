
import { RiDeleteBin6Line } from 'react-icons/ri'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'
import './index.css'
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'

const Contact = props => {
  const {contactDetails,onDeleteContact} = props
  const {id,name,email,contactNumber,contactType} = contactDetails

  return (
      <li key={id} className="contact-card">
        <div className="logo-name-number">
            <div className="contact-logo">{name[0].toUpperCase()}</div>
            <div className="name-number">
                <h1 className="name">{name}</h1>
                <div className="contact-number"><FiPhone className="icon"/>{contactNumber}</div>
            </div>
        </div>
        
          <div className="email-contact-type">
            <div className="email"><HiOutlineMail className="icon"/>{email}</div>
            <p className="contact-type">{contactType}</p>
          </div>
        <div className="footer">
            <Link to={`/contacts/${id}`}>
            <BiEdit className="icon"/>
            </Link>
            <RiDeleteBin6Line className="icon" onClick={()=>onDeleteContact(id)}/>
        </div>
      </li>
  )
}
export default Contact
