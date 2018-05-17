import {
  SET_SOURCE,
  SET_URL,
  SET_LOADING,
} from '../actions'

const initialState = {
  url: '',
  loading: false,
  source: 'giphy',
}

const stuffApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOURCE:
      return {
        ...state,
        source: action.source,
      }
    case SET_URL:
      return {
        ...state,
        url: action.url,
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default stuffApp
