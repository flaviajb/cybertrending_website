import React from 'react'
import axios from 'axios'
import IconButton from '@material-ui/core/Button';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

import './VoteButton.css'

class VoteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upVotes:0,
            downVotes:0
        }
    }
    componentDidMount(){
        this.setState({
            upVotes:this.props.upQtd,
            downVotes:this.props.downQtd
        })
    }
    upVote = () => {
        axios.put(`https://cybertrending.herokuapp.com/noticia/${this.props.id}/upvote`).then(response =>{
            let numUpVotes = response.data.upQtd
            this.setState({upVotes:numUpVotes})
        })
    }
    downVote = () => {
        axios.put(`https://cybertrending.herokuapp.com/noticia/${this.props.id}/downvote`).then(response =>{
            let numDownVotes = response.data.downQtd
            this.setState({downVotes:numDownVotes})
        })
    }   
  render() {

    return(
        <div>
            <IconButton onClick={() => {this.upVote()}}>
                <ThumbUp /> {this.state.upVotes}
            </IconButton>
            <IconButton onClick={() => {this.downVote()}}>
                <ThumbDown /> {this.state.downVotes}
            </IconButton>
        </div>        
    )
  }
}
export default VoteButton