export function changeLanguageRequest(language){
  const translationsObj = require(`../../../../i18n/${language}.po.json`)
  return{
    type: 'changeLanguageRequest',
    language,
    translationsObj
  }
}

export function changeLanguageSuccess(language){
  return{
    type: 'changeLanguageSuccess',
    language
  }
}