const initialState = require(`../../../../i18n/en.po.json`)

export default function reducer( state = initialState, action){
  const actions = {
    changeLanguageSuccess: () => {
      const { language } = action
      const { translationsObj } = action.language
      state.language = language
      state.translations = translationsObj.translations
      return { ...state }
    },
    DEFAULT: () => {
      state.language = 'pt'
      return { ...state }
    }
  }
  return(actions[action.type] || actions['DEFAULT'])()
}
