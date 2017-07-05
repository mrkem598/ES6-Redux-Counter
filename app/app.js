// This is our main React file
//We need to grab all relevant React packages, and connect them to Redux by passing the store into the provider as a prop. 
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './config/routes'
import store from './store'
// Then we pass the Routes to our provider as a child element
ReactDOM.render(
  <provider store={store}>
      {routes}
  </provider>,
  document.getElementById('app'));
