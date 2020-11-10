import React from 'react'

import './CardTitle.css'

class CardTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return(
        <div class="cardTitle">
                <a href={this.props.urlNoticia}>
                    {this.props.titulo}
                </a>
        </div>
    )
  }
}
export default CardTitle