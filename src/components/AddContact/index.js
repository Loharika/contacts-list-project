import {v4 as uuidv4} from 'uuid'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailRegex from 'email-regex';
import {Component} from 'react'
import Header from '../Header'

import './index.css'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    contactNumber:'',
    contactType:'',
    showSubmitError: false,
    errorText:'Please fill required details'
  }


  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeContactNumber = event => {
    this.setState({contactNumber: event.target.value})
  }

  onSelectContactType=(event)=>{
    const { value } = event.target;
    this.setState({
      contactType: value
    });
  }

  onAddContact = (event) => {
    event.preventDefault()
    const {name,email,contactType,contactNumber} = this.state
    if(name!=='' && email!=='' && contactType!=='' && contactNumber!==''){
      const newContact={
        id:uuidv4(),
        name:name,
        email:email,
        contact_number:contactNumber,
        contact_type:contactType,
    }
    this.validateContactDetails(newContact)
    }
    else{
      this.setState({showSubmitError:true,errorText:'Please fill required details'})
    } 
  }
  checkEmail=(email)=>{
    return emailRegex().test(email);
  }
  checkContactNumber=(contactNumber)=>{
    if(contactNumber.length===10 && !isNaN(Number(contactNumber))){
      return true;
    }
    else{
      return false;
    }
    }
  validateContactDetails=(newContact)=>{
    const {email,contactNumber} = this.state
      if(this.checkEmail(email) && this.checkContactNumber(contactNumber)){
        this.setState({errorText:"",showSubmitError:false},this.addContactDetails(newContact))
      }
      else{
        if(!this.checkEmail(email) && !this.checkContactNumber(contactNumber)){
          this.setState({errorText:"Please fill valid email, contact number",showSubmitError:true})
          }
          else if(!this.checkEmail(email)){
          this.setState({errorText:"Please fill valid email",showSubmitError:true})
          }
          else if(!this.checkContactNumber(contactNumber)){
          this.setState({errorText:"Please fill 10 digit valid contact number",showSubmitError:true})
          }
      }
  }
  addContactDetails=(newContact)=>{
    const previousContacts=localStorage.getItem("contacts");
    if(previousContacts===null){
        const updatedContacts=[newContact]
        const strigifiedData=JSON.stringify(updatedContacts)
        localStorage.setItem('contacts',strigifiedData)
    }
    else{
        const currentContacts=JSON.parse(previousContacts)
        const updatedContacts=[...currentContacts,newContact]
        const strigifiedData=JSON.stringify(updatedContacts)
        localStorage.setItem('contacts',strigifiedData)
    }
    this.initializeAllFields()
    this.displayToaster()
  }

  displayToaster=()=>toast(<div className="toaster-text">Contact Updated Succesfully!</div>,{
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })

  initializeAllFields=()=>{
    this.setState({
      name: '',
      email: '',
      contactNumber:'',
      contactType:'',
      showSubmitError: false,
    })
  }

  renderNameField = () => {
    const {name} = this.state
    return (
      <div className="contact-details">
        <label className="input-label" htmlFor="name">
          NAME*
        </label>
        <input
          type="text"
          id="name"
          className="name-input-field"
          value={name}
          onChange={this.onChangeName}
          placeholder="Name"
        />
      </div>
    )
  }

  renderEmailField = () => {
    const {email} = this.state
    return (
      <div className="contact-details">
        <label className="input-label" htmlFor="email">
          EMAIL*
        </label>
        <input
          type="text"
          id="email"
          className="email-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </div>
    )
  }

  renderContactNumberField = () => {
    const {contactNumber} = this.state
    return (
      <div className="contact-details">
        <label className="input-label" htmlFor="contactNumber">
          CONTACT NUMBER*
        </label>
        <input
          type="text"
          id="contactNumber"
          className="contact-number-input-field"
          value={contactNumber}
          onChange={this.onChangeContactNumber}
          placeholder="Contact Number"
        />
      </div>
    )
  }

  renderContactTypeOptions = () => {
    const {contactType}=this.state
    return (
      <div className="contact-details" name="contactTypeOptions">
        <p className="contact-type">CONTACT TYPE*</p>
        <div className="contact-type-option">
          <input type="radio" id="business" name="contactType" checked={contactType==='Business'} className="contact-type-radio-button" value="Business" onChange={this.onSelectContactType}/>
          <label htmlFor="business" className="contact-type-label">Business</label>
        </div>
        <div  className="contact-type-option">
          <input type="radio" id="css" name="contactType" checked={contactType==='Personal'} className="contact-type-radio-button" value="Personal" onChange={this.onSelectContactType}/>
          <label htmlFor="personal"  className="contact-type-label">Personal</label>
        </div>
      </div>
    )
  }
  
  render() {
      const {showSubmitError,errorText}=this.state
    return (
        <>
        <Header/>
      <div className="add-contact-form-container">
        <form className="add-contact-form" onSubmit={this.onAddContact}>
          <h1 className="heading-text">Add Contact</h1>
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderContactNumberField()}</div>
          <div className="input-container">{this.renderContactTypeOptions()}</div>
          <p className="required-fields-text">*Required Fields</p>
          <div className="add-btn-container">
          <button type="submit" className="add-contact-btn">
            Add Contact
          </button>
          </div>
          {showSubmitError && <p className="error-message">*{errorText}</p>}
        <ToastContainer />
        </form>
      </div>
      </>
    )
  }
}

export default AddContact