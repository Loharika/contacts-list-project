import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const PopUpDisplay = (props) => {
    const {btnText,onClickFunction,popUpText,displayPopUp}=props
    return (
        <>
        
        <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="submit" className="trigger-button" onClick={onClickFunction}>
            {btnText}
          </button>
        }
      >
          {displayPopUp?close => (
          <>
            <div>
              <p>{popUpText}</p>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </>
        ):''}
        
      </Popup>
    </div>
        </>
           
    )
}

export default PopUpDisplay