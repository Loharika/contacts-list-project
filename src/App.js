import {Route, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'
import AddContact from './components/AddContact'
import './App.css'
import Contacts from './components/Contacts'
import UpdateContact from './components/UpdateContact'

const App = () => (
  <Switch>
    <Route exact path="/add-contact" component={AddContact}/>
    <Route exact path="/" component={Contacts} />
    <Route exact path="/contacts/:id" component={UpdateContact} />
    <Route path="/not-found" component={NotFound} />
    <Route component={NotFound} />
  </Switch>
)

export default App