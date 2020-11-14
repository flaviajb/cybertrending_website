import React from 'react'

import axios from 'axios'

import NewsCard from '../Molecules/NewsCard'
import AdSensePanel from '../Molecules/AdSensePanel'
import Grid from '@material-ui/core/Grid'

import './NewsPanel.css'

class NewsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: []
        }
      }
    componentDidMount(){
        try{           
            if(this.props.tag)
                axios.get(`https://cybertrending.herokuapp.com/noticia/${this.props.tag}`).then(response => {
                    const noticias = response.data
                    this.setState({noticias})
                })
            else 
                axios.get(`https://cybertrending.herokuapp.com/noticia/`).then(response => {
                    const noticias = response.data
                    this.setState({noticias:this.arrangeNoticias(noticias)})
                })            
        }catch(error){
            console.log(error)
        }
    }
    arrangeNoticias = (noticias) => {
        noticias.sort(
            (a,b) => {
                let dataNoticiaA = new Date (a.dataInclusao)
                let dataNoticiaB = new Date (b.dataInclusao)
                if(dataNoticiaA < dataNoticiaB)
                    return 1
                if(dataNoticiaA > dataNoticiaB)
                    return -1
                if(a.upQtd < b.upQtd)
                    return 1
                if(a.upQtd > b.upQtd)
                    return -1
                return 0
            }
        )
        return noticias
    }
    render(){

        return (
            <div class="panel">
                {this.state.noticias.map(noticia => {
                    return (
                        <>  
                            <Grid container>
                                <Grid item md={10}>
                                    <NewsCard noticia={noticia} />
                                </Grid>
                                <Grid item md={2}>
                                    <AdSensePanel/>
                                </Grid>
                            </Grid>                             
                        </>
                    )
                })}     
            </div>                   
        )        
    }
}
export default NewsPanel