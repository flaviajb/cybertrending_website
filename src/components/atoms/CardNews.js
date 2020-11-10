import React from 'react'

import './CardNews.css'

class CardNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return(
        <div class="news">
            <p class="news-text">
                {this.props.news}
            </p>
        </div>
    )
  }
}
export default CardNews