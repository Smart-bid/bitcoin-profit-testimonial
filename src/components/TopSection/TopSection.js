import React, { Component } from 'react'
import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'
import main_video from './VideoPlayer/bitcoin_profit_main.mp4'
import badges from './badges.png'

export default class TopSection extends Component {
    constructor(props) {
        super(props)

        this.state = {showmodal: false}
    }

    handleClose() {
        this.setState({showmodal: false})
    }

    componentDidMount() {
        setTimeout(() => this.setState({showmodal: true}), 2500)
    }

    render() {
        let version = this.props.languageManager();

        return (
            <div className='TopSection'>
                <Header version={version} />
                <div className="top-reg">
                    <VideoPlayer video_link={main_video} version={version} step={this.props.syncState.step}/>
                    <div className="regform-block">
                        <div className="reg-title"><span>{version.topreg1}</span><br/>{version.topreg2}<br/>{version.topreg3}</div>
                        <div className="regform">
                            <Regform {...this.props}/>
                            <img src={badges} alt="logo" className="regform-img"/>
                        </div>
                    </div>
                </div>
                <div className="modalscreen" style={{display: (this.state.showmodal) ? 'flex' : 'none'}}>
                    <div className="modal">
                        <div className="close" onClick={this.handleClose.bind(this)}>×</div>
                        <div className="title">{version.modal_title}</div>
                        <div className="subtitle">{version.modal_sub}</div>
                        <p>{version.modal_text1}</p>
                        <p>{version.modal_text2[0]} <span>{version.modal_text2[1]}</span> {version.modal_text2[2]} <span>{version.modal_text2[3]}</span> {version.modal_text2[4]}</p>
                        <Regform {...this.props} class={'inmodal'}/>
                    </div>
                </div>
            </div>
        )
    }
}
