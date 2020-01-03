export default function reducer( state = [], action){
  const actions = {
    firstStateSuccess: () => {
      state.is ^= true
      return { ...state }
    },
    firstStateReset: () => {
      state.is = 1
      return state
    },
    DEFAULT: () => {
      return state
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}