import React from 'react'

import NewsPanel from './components/Organisms/NewsPanel'
import Header from './components/Organisms/Header'
import Grid from '@material-ui/core/Grid'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchParam: undefined}
  }
  search = (param) => {
    this.setState({searchParam:param})
  }
  render(){
    return (
      <div class="App">
        <Grid container direction={"column"}>
          <Grid container direction={"column"}>
            <Grid item>
              <Header searchFunction={this.search}/>
            </Grid>
          </Grid>
          <div class="container">
            <Grid container direction={"column"}>
              <Grid container direction={"row"}>
                <Grid item md={9}>
                  <NewsPanel searchParam={this.state.searchParam}/>
                </Grid>     
              </Grid> 
            </Grid> 
          </div>     
        </Grid>          
      </div>
    )
  }
}
export default App;
