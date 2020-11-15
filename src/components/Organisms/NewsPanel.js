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
            noticias: [],
            loading: false,
            noticiasFiltradas: []
        }
      }
    componentDidMount(){
        try{           
            axios.get(`https://cybertrending.herokuapp.com/noticia/`).then(response => {
                const noticias = response.data
                this.setState({noticias:this.arrangeNoticias(noticias)})
            })           
        }catch(error){
            console.log(error)
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.searchParam !== prevProps.searchParam){
            if(this.props.searchParam === undefined || this.props.searchParam === "" || this.props.searchParam === null){
                this.setState({noticiasFiltradas: []})
            }else {                    
                let noticias = this.state.noticias.filter(noticia => {
                    const tag = noticia.tagTwitter.toUpperCase()
                    const param = this.props.searchParam.toUpperCase()
                    return tag.indexOf(param) > -1
                }, this)
                this.setState({noticiasFiltradas:this.arrangeNoticias(noticias)})
            }            
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
        let noticias
        if(this.state.noticiasFiltradas.length > 0)
            noticias = this.state.noticiasFiltradas
        else
            noticias = this.state.noticias
        return (
            <div class="panel">
                {noticias.map(noticia => {
                    return (
                        <div class="panel">  
                            <Grid container>
                                <Grid item sm={12} md={10}>
                                    <NewsCard noticia={noticia} />
                                </Grid>
                                <Grid item sm={12} md={2}>
                                    <AdSensePanel/>
                                </Grid>
                            </Grid>                             
                        </div>
                    )
                })}     
            </div>                   
        )        
    }
}
export default NewsPanel