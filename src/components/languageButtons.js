import React from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

import * as LanguagesActions from '../store/modules/Languages/actions'

const LanguageButtons = () => {
  const dispatch = useDispatch((store) => store)
  const languagesActions = bindActionCreators(LanguagesActions, dispatch)
  const buttonStyle = {
    marginRight: `10px`, 
    marginTop: `10px`, 
    borderColor: `indigo`,
    borderSize: `1px`,
    borderStyle: `solid`,
    background: `white`,
    color: `indigo`,
    borderRadius: `5px`,
    cursor: `pointer`
  }
  
  return(
    <div>
      <button 
        style={buttonStyle}
        onClick={ ()=>{ languagesActions.changeLanguageRequest('en') }}
      >
        ENG
      </button>
      <button 
        style={buttonStyle}
        onClick={ ()=>{ languagesActions.changeLanguageRequest('pt') }}
      >
        PT
      </button>
    </div>
  )
}

export default LanguageButtons