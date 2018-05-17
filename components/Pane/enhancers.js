import React from 'react'
import {connect} from 'react-redux'
import {
  compose,
  branch,
  renderComponent,
  renderNothing,
} from 'recompose'

const connected = compose(
  connect(state => state))

const Loader = () => <span>Loading...</span>

const withLoader = branch(
  ({loading}) => loading,
  renderComponent(Loader))

const withUrlCheck = branch(
  ({url}) => !url,
  renderNothing)

export const enhance = compose(
  connected,
  withLoader,
  withUrlCheck)
