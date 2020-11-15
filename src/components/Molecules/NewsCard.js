import React from 'react'
import {Helmet} from "react-helmet"

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
          <Helmet>
                <meta name="description" content={this.props.noticia.conteudoNoticia.substr(0,217)} />
          </Helmet>
          <CardTitle urlNoticia={this.props.noticia.urlNoticia} titulo={this.props.noticia.tituloNoticia}/>
          <CardTwitterTag urlTagTwitter={this.props.noticia.urlTagTwitter} tagTwitter={this.props.noticia.tagTwitter}/>
          <span class="date">{new Date(this.props.noticia.dataInclusao).toLocaleString('pt-BR', {weekday:'long', year:'numeric', month:'long', day:'numeric', hour12:false})}</span>
          <CardNews news={this.props.noticia.conteudoNoticia}/>
          <VoteButton id={this.props.noticia.id} upQtd={this.props.noticia.upQtd} downQtd={this.props.noticia.downQtd} />
          <span class="fonteLink">Fonte: {this.props.noticia.urlNoticia}</span>
        </div>
    )
  }
}
export default NewsCard