import React from 'react'

import axios from 'axios'

import NewsCard from '../Molecules/NewsCard'
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
                axios.get(`http://72.167.220.112:9000/noticia/${this.props.tag}`).then(response => {
                    const noticias = response.data
                    this.setState({noticias})
                })
            else 
                axios.get(`http://72.167.220.112:9000/noticia/`).then(response => {
                    const noticias = response.data
                    this.setState({noticias})
                })            
        }catch(error){
            console.log(error)
        }
    }
    componentDidUpdate(prevProps, prevState){

    }
    render(){

        return (
            <div class="panel">
                {this.state.noticias.map(noticia => {
                    return <NewsCard noticia={noticia} />
                })}     
            </div>                   
        )        
    }
}
export default NewsPanel