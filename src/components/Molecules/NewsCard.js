import React from 'react'

import './NewsCard.css'

import CardTitle from '../atoms/CardTitle'
import CardTwitterTag from '../atoms/CardTwitterTag'
import CardNews from '../atoms/CardNews'
import VoteButton from '../atoms/VoteButton'

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return(
        <div class="newsCard">
            <CardTitle urlNoticia={this.props.noticia.urlNoticia} titulo={this.props.noticia.tituloNoticia}/>
            <CardTwitterTag urlTagTwitter={this.props.noticia.urlTagTwitter} tagTwitter={this.props.noticia.tagTwitter}/>
            <CardNews news={this.props.noticia.conteudoNoticia}/>
            <VoteButton id={this.props.noticia.id} upQtd={this.props.noticia.upQtd} downQtd={this.props.noticia.downQtd} />
        </div>
    )
  }
}
export default NewsCard