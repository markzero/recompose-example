export const SET_URL = 'SET_URL'
export const SET_LOADING = 'SET_LOADING'
export const SET_SOURCE = 'SET_SOURCE'

export const setUrl = url => ({
  type: SET_URL,
  url,
})

export const setLoading = () => ({
  type: SET_LOADING,
})

export const setType = source => ({
  type: SET_SOURCE,
  source,
})
