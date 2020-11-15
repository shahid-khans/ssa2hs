import React from 'react'
import Context from './Context'
// export const A2HSContext = React.createContext()

// This function takes a component...
export const withA2HS = Component => {
  // ...and returns another component...
  console.log('Component')
  console.log(Component)
  const A2HSComponent = props => {
  console.log(props)

    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return <Context.Consumer>{(context) => <Component {...props} {...context} />}</Context.Consumer>
  }

  return A2HSComponent
}

// export default A2HSContext
