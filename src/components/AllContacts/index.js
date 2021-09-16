import {Component} from 'react'
import Contact from '../Contact';
import Filters from '../Filters';
import NoContacts from '../NoContacts';
import './index.css'

const options=[
    { value: 'All', label: 'All' },
    { value: 'Personal', label: 'Personal' },
    { value: 'Business', label: 'Business' },
]


class AllContacts extends Component{
    state={
        allContacts:[],
        contactType:options[0].value
    }
    componentDidMount(){
    this.getContacts()
    }

    getContacts=()=>{
        const {contactType}=this.state
        const previousContacts=localStorage.getItem("contacts");
        if(previousContacts===null){
            this.setState({allContacts:[]})
        }
        else{
            const currentContacts=JSON.parse(previousContacts)
            const formattedContacts=currentContacts.map(eachContact=>this.getFormattedContact(eachContact))
            if(contactType==='All'){
                this.setState({allContacts:[...formattedContacts]})
            }
            else{
                const filteredContacts=this.displayFilteredContacts(formattedContacts)
                this.setState({allContacts:[...filteredContacts]})
            }
        }
    }

    getFormattedContact=(contactDetails)=>{
        return {
            id:contactDetails.id,
            name:contactDetails.name,
            email:contactDetails.email,
            contactType:contactDetails.contact_type,
            contactNumber:contactDetails.contact_number
        }
    }
    onChangeContactType=(event)=>{
        this.setState({contactType:event.value},this.getContacts)
    }
    displayFilteredContacts=(formattedContacts)=>{
        const {contactType}=this.state
        const filteredContacts=formattedContacts.filter(contact=>contact.contactType===contactType)
        return filteredContacts
    }
    renderContactsUI=()=>{
        const {allContacts}=this.state
        return (
            allContacts.map(contact=><Contact 
                key={contact.id} 
                contactDetails={contact}
                onDeleteContact={this.onDeleteContact} 
                onUpdateContact={this.onUpdateContact}
                />)
        )
    }
    onDeleteContact=(contactId)=>{
        const currentContacts=JSON.parse(localStorage.getItem('contacts'))
        const updatedContacts=currentContacts.filter(contact=>contact.id!==contactId)
        localStorage.setItem('contacts',JSON.stringify(updatedContacts))
        this.getContacts()
    }
    noContactDisplayText=()=>{
        let displayText;
        const {contactType}=this.state
        switch (contactType) {
            case 'Personal':
                displayText = "Personal";
                break;
            case 'Business':
                displayText = "Business";
                break;
            default:
                displayText = "";
              break;
          }
          return displayText
    }
    render(){
        const {allContacts}=this.state
        return (
            <div className="contact-main-container" >
                <div className="contacts-container">
            <h1 className="all-contacts-heading">All Contacts</h1>
            <div className="contact-type-filters-container">
                <div className="contact-type-filters">
                    <Filters options={options} onChangeContactType={this.onChangeContactType}/>
                </div>
            </div>
            <ul className="contacts-list">
            {allContacts.length!==0?this.renderContactsUI():<NoContacts displayText={this.noContactDisplayText()} />}</ul>
            </div>
            </div>
            
        )
    }
}
export default AllContacts