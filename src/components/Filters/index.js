import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Filters = props => {
    const {onChangeContactType,options}=props
    const defaultOption = options[0].value;
    return <Dropdown options={options} onChange={onChangeContactType} value={defaultOption} placeholder="Select an option" />;
}

export default Filters
