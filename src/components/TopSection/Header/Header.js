import React, { Component } from 'react'

import logo from './bcprofit.svg'

export default class Header extends Component {

    render() {
        let version = this.props.version;

        return (
            <div className='Header'>
                <div className="content">
                    <img src={logo} alt="logo"/>
                    <div className="title">{version.title}</div>
                    <div className="subtitle">
                        <span>{version.subtitle}</span>{version.span[0]} <br/> {version.span[1]}
                    </div>
                 </div>   
            </div>
        )
    }
}
