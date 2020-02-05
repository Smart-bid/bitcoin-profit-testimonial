import React, { Component } from 'react'

import logo from './bcprofit.svg'

export default class HeaderSuccess extends Component {

    render() {
        let version = this.props.version;

        return (
            <div className='Header'>
                <div className="content">
                    <img src={logo} alt="logo"/>
                    <div className="title">{version.title_success}</div>
                    <div className="title2">{version.title_success_second}</div>
                    <div className="subtitle">
                        <span>{version.subtitle_success}</span>{version.span_success[0]}<br/>{version.span_success[1]}<br/>{version.span_success[2]}
                    </div>
                 </div>   
            </div>
        )
    }
}
