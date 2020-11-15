import React from 'react'

import './CardTwitterTag.css'

class CardTwitterTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return(
        <div class="twiterTag">
              <a class="twitterLink" href={this.props.urlTagTwitter} target="_blank" rel="noopener noreferrer">
                #{this.props.tagTwitter}
              </a>                
        </div>
    )
  }
}
export default CardTwitterTag