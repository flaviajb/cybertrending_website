import './App.css';
import NewsPanel from './components/Organisms/NewsPanel'
import Header from './components/Organisms/Header'
import AdSensePanel from './components/Organisms/AdSensePanel'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <>
    <Grid container={true} direction={"column"}>
      <Grid container={true} direction={"column"}>
        <Grid item={true}>
          <Header />
        </Grid>
      </Grid>
      <Grid container={true} direction={"column"}>
        <Grid container={true} direction={"row"}>
          <Grid item={true} direction={"column"} md={9}>
            <NewsPanel/>
          </Grid> 
          <Grid item={true} direction={"column"} md={3}>
            <AdSensePanel />
          </Grid>      
        </Grid> 
      </Grid>      
    </Grid>
           
      
      
    </>
  )
}
export default App;
