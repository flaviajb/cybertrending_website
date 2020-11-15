import React from 'react'
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
    }
    componentDidUpdate(prevProps, prevState){
    }
    render(){
        return (
            <>
                <div class="header">
                    <Grid container alignItems='center' alignContent='stretch'>
                        <Grid item xs={true} md={9}>
                            <div class="logo">
                                Cybertrendings
                            </div>
                        </Grid>
                        <Grid item xs={true} md={3}>
                            <div class="search">
                                <TextField onChange={(event) => {this.props.searchFunction(event.target.value)}} id="busca" label="#" type="search" size='small' color='primary' margin='none' fullWidth={true}/>
                            </div>                            
                        </Grid> 
                    </Grid>                                                            
                </div>
            </>                  
        )        
    }
}
export default Header