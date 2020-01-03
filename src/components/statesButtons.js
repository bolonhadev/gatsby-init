import React from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

import * as FirstStateActions from '../store/modules/FirstState/actions'

const StatesButtons = () => {
  const dispatch = useDispatch((store) => store)
  const firstStateActions = bindActionCreators(FirstStateActions, dispatch)
  const buttonStyleRed = {
    marginRight: `10px`, 
    marginTop: `10px`, 
    borderColor: `indigo`,
    borderSize: `1px`,
    borderStyle: `solid`,
    background: `red`,
    color: `indigo`,
    borderRadius: `5px`,
    cursor: `not-allowed`
  }
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
  function handleChangeFirstState(e){
    // if (e.type === 'click') {
    //   console.log('Left click');
    // } else if (e.which === '1') {
    //   console.log('Right click');
    // }
    if (typeof e === 'object') {
      e.preventDefault()
      switch (e.button) {
        case 0:
          firstStateActions.firstStateSuccess()
          break;
        case 1:
          console.log('Middle button clicked.')
          break;
        case 2:
          firstStateActions.firstStateReset()
          break;
        default:
          console.log(`Unknown button code: ${e.button}`)
      }
    }
  }
  // function handleClickFirstState(){
  //   firstStateActions.firstStateSuccess()
  // }
  return(
    <div>
      
      <button 
        style={buttonStyle}
        onContextMenu={(e)=>{ e.preventDefault() }}
        onMouseDown={ (e)=>{ handleChangeFirstState(e) }}
        title="{Left Click: bool} && {Right Click: false}"
      >
        First State
      </button>

      <button style={buttonStyleRed} disabled>Second State</button>
      <button style={buttonStyleRed} disabled>Another State</button>
    </div>
  )
}

export default StatesButtons