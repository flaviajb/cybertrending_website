import React from 'react'
import Grid from '@material-ui/core/Grid'

import './Footer.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: []
        }
      }
    render(){
        return (
            <>
                <div class="footer" data-nosnippet>
                    <Grid container alignItems='center' alignContent='center'>
                        <Grid item xs={true} md={12}>
                            <p>Olá leitor. Aqui no Cybertrending você é quem manda.</p>
                            <p> Você pode avaliar as notícias curtindo (ou descurtindo). As notícias serão separadas por data, e as com mais curtidas ficarão por primeiro! As notícias com muito mais descurtidas do que curtidas serão eliminadas. Assim todos garantimos que o conteúdo será da melhor qualidade.</p>
                            <p>Nós não coletamos qualquer informação sua, então não precisa se preocupar.</p>
                            <p>Todas as notícias são extraídas de outras fontes, linkadas diretamente a elas, e são colhidas automaticamente! Então não nos responsabilizamos pelo conteúdo e damos crédito total aos autores.</p>
                            <p>Cybertrending, o primeiro portal de notícias com conteúdo realmente relevante.</p>
                        </Grid> 
                    </Grid>                                                            
                </div>
            </>                  
        )        
    }
}
export default Header