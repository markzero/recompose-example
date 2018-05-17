import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {withContext} from 'recompose'
import store from './store'
import {
  Pane,
  SearchField,
} from './components'

const provideStore = store => withContext(
  {store: PropTypes.object,},
  () => ({store}))

const Stuff = provideStore(store)(() =>
  <div>
    <SearchField/>
    <Pane/>
  </div>)

export default Stuff
