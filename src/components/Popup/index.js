import React from 'react';
import './popup.css'

class Popup extends React.Component{

    render(){
        const poap = "<iframe width='100%' height='100%' scrolling='no' src='https://app.poap.xyz/claim/xoruaf' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";

        return(
            <div className='popup h-screen'>
                <div className='popup_inner h-screen'>
                    <h1> {this.props.text} </h1>
                    <div className='h-screen' dangerouslySetInnerHTML={{ __html: poap ? poap :""}}/>
                </div>
            </div>
        );
    }
}

export default Popup;