import {connect} from 'react-redux'
import {
  compose,
  withState,
  withHandlers,
} from 'recompose'
import axios from 'axios'
import {setUrl, setLoading} from '../../store/actions'

const unsplashUrl =
  'https://api.unsplash.com/search/photos'
const unsplashUrlParams =
  'page=1&per_page=1&client_id=60bf1ba1b0279772465b91344a07d843cc162c4788889dadcd77a062ed4dffa7'

export const enhance = compose(
  connect(state => state),
  withState('search', 'setSearch', ''),
  withHandlers({
    callSearch: ({search, dispatch, setSearch}) => () => {
      dispatch(setLoading())
      setSearch('')
      axios.get(`${unsplashUrl}?query=${search}&${unsplashUrlParams}`)
        .then(response => {
          const imgUrl = response.data.results[0].urls.regular

          if (imgUrl)
            dispatch(setUrl(imgUrl))
        })
        .catch(err => console.log(err))
    },
    clearSearch: ({setSearch}) => () => setSearch(''),
  }),
)
