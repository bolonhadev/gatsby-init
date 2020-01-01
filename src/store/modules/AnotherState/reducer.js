export default function reducer( state = [], action){
  const actions = {
    ACTION_NAME_I: () => {
      state.something = 'Hi something'
      return { ...state }
    },
    ACTION_NAME_II: () => {
      state = {}
      return state
    },
    DEFAULT: () => {
      return state
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}