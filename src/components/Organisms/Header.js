import React from 'react'

import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: []
        }
      }
    componentDidMount(){
        try{           
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
            <>
                <div class="header">
                    <Grid xs={true} container={true} alignItems='center' alignContent='center'>
                        <Grid item={true} xs={true} md={true} alignItems='center' alignContent='center' justify='flex-start'>
                            <div class="logo">
                                Cybertrendings
                            </div>
                        </Grid>
                        <Grid item={true} xs={true} md={true} alignItems='center' alignContent='center' justify='flex-end'>
                            <div class="search">
                                <TextField id="busca" label="#hashtag" type="search" size='small' color='primary' margin='none' fullWidth={true}/>
                            </div>                            
                        </Grid> 
                    </Grid>                                                            
                </div>
            </>                  
        )        
    }
}
export default Header