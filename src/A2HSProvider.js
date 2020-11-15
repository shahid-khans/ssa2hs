import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import {default as A2HSContext} from './Context'

const initialState = {
  deferredPrompt: () => {},
  isAppInstallable: false,
  isAppInstalled: false
}

const A2HSProvider = ({ children }) => {
  const [state, setA2HPState] = useState(initialState)

  window.addEventListener('beforeinstallprompt', e => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()
    // Stash the event so it can be triggered later.
    setA2HPState({ deferredPrompt: e, isAppInstallable: true })
    console.log('deffered prompt saved ss')
  })

  window.addEventListener('appinstalled', evt => {
    setA2HPState({ isAppInstalled: true })
  })
  console.log(children)
  return <A2HSContext.Provider value={{ ...state, setA2HPState }}>{children}</A2HSContext.Provider>
}

export default A2HSProvider
