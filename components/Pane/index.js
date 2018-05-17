import React from 'react'
import {enhance} from './enhancers'
import styles from './styles'

export const Pane = () =>
  <div style={styles}>
    <PaneView />
  </div>

const PaneView = enhance(({
  url,
}) =>
  <div style={styles}>
    <img style={styles.img} src={url} />
  </div>)
