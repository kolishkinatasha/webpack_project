import { hot } from 'react-hot-loader/root'
import * as React from 'react'

import classes from './App.less';

function AppComponent() {
  return(
    <h1 className={classes.app}>
      Reddit for our own 
    </h1>
  )
}

export const App = hot(AppComponent)