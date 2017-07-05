// Here we grab React and peel component out ot the library using ES6 syntax
import React , { Component } from 'react'
import { Container } from 'react-grid-system'
//Setup for Material Ui
//wrapping the app to use certaine CSS classes and applied to our component
import MuiThemProvider from 'material-ui/styles/MuilThemProvider'
//For mobile usability
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
// render inside our container because we want the rest of the application to render there
export default class Main extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Container>
      {this.props.children}
     </Container>
   </MuiThemProvider>
  );
  }
}
    
