import React from 'react'

import NewsPanel from './components/Organisms/NewsPanel'
import Header from './components/Organisms/Header'
import Footer from './components/Organisms/Footer'
import Grid from '@material-ui/core/Grid'
import {Helmet} from "react-helmet"

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
      <>
        <Helmet>
                  <meta charSet="utf-8" />
                  <html lang="pt" amp />
                  <title>CyberTrending - Principais tags do Twitter e notícias relacionadas</title>
                  <meta name="description" content="Olá leitor! Aqui você poderá acessar as principais notícias publicadas na rede relacionadas à tag #TOP1 do Twitter da última hora." />
                  <meta name="robots" content="index"/>
                  <link rel="canonical" href="https://cybertrending.com.br" />
        </Helmet>
        <Grid container direction={"column"}>
            <Grid item sm={12}>
              <Header searchFunction={this.search}/>
            </Grid>
            <div class="container">
              <Grid container direction={"row"}>
                <Grid item sm={12}>
                  <NewsPanel searchParam={this.state.searchParam}/>
                </Grid>     
              </Grid>  
            </div>
            <Grid container direction={"row"}>
              <Grid item sm={12}>
                <Footer />
              </Grid>     
            </Grid>               
        </Grid>
      </>
    )
  }
}
export default App;
