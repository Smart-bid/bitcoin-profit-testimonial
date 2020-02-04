import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Regform from '../TopSection/Regform/Regform'

import logo from './bcprofitmin.svg'

export default class BottomSection extends Component {
    render() {
        let version = this.props.languageManager();

        return (
            <div className='BottomSection'>
                <div className="bottomreg">
                    <div className="content">
                        <div className="title">{version.topreg1}</div>
                        <div className="subtitle">{version.topreg2}{version.topreg3}</div>
                        <div className="regform">
                            <Regform {...this.props} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="content">
                        <img src={logo} alt="logo" className="footerlogo"/>
                        <div className="copyright">Copyright {(new Date).getFullYear()} The Bitcoin Profit</div>
                        <div className="links">
                            <Link to='/gov'>Government Disclaimer</Link>
                            <Link to='/privacy'>Privacy Policy</Link>
                            <Link to='/terms'>Terms</Link>
                            <Link to='/disc'>Earnings Disclaimer</Link>
                            <Link to='/spam'>Spam Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
