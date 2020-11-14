import React from 'react'


class AdSensePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    componentDidMount(){

    }
    componentDidUpdate(prevProps, prevState){

    }
    render(){

        return (
                 <div>
                     Adsense
                     <script data-ad-client="ca-pub-2402874550484901" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                 </div>
        )      
    }
}
export default AdSensePanel