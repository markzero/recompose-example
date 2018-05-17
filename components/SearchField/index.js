import React from 'react'
import {enhance} from './enhancers'

export const SearchField = enhance(({
  search,
  setSearch,
  callSearch,
}) =>
  <div>
    <input
      size="50"
      value={search}
      onChange={event => setSearch(event.target.value)}
    />
    <input
      type="Submit"
      value="Search"
      onClick={callSearch}
      readOnly
    />
  </div>)
