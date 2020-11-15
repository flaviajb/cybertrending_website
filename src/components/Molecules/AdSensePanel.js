import React from 'react'

import './AdSensePanel.css'


class AdSensePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    render(){

        return (
                 <div class="adSense">
                     Adsense
                     <script data-ad-client="ca-pub-2402874550484901" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                 </div>
        )      
    }
}
export default AdSensePanel