import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'
import success_video from './VideoPlayer/succeess-video.mp4'
import HeaderSuccess from "./Header/HeaderSuccess";

export default class TopSectionSuccess extends Component {
    constructor(props) {
        super(props)
        let today = new Date(),
            date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        this.state = {
            date: date,
            time: {},
            seconds: 590,
            showmodal: false
        };
        this.timer = 0;
    }

    secondsToTime(sec){

        let divisor_for_minutes = sec % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        minutes = ("0" + minutes).slice(-2);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.round(divisor_for_seconds);
        seconds = ("0" + seconds).slice(-2);

        let timeObj = {
            "minutes": minutes,
            "seconds": seconds
        };
        return timeObj;
    }

    countDown = () => {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    handleClose() {
        this.setState({showmodal: false})
    }

    componentDidMount() {
        setTimeout(() => this.setState({showmodal: true}), 2500);
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    render() {
        let version = this.props.languageManager();

        return (
            <div className='TopSection TopSectionSuccess'>
                <HeaderSuccess version={version} />
                <div className="top-reg">
                    <VideoPlayer video_link={success_video} version={version} step={this.props.syncState.step}/>
                    <div className="regform-block">
                        <div className="reg-title success-reg-title"><span>{version.topreg1_success}</span><br/>{version.topreg2_success}</div>
                        <div className="regform second-regform">
                            <Regform {...this.props}/>
                        </div>
                    </div>
                </div>
                <div className="modalscreen second-modal" style={{display: (this.state.showmodal) ? 'flex' : 'none'}}>
                    <div className="modal">
                        <div className="close" onClick={this.handleClose.bind(this)}>×</div>
                        <div className="title">{version.modal_title}</div>
                        <p className="modal-text">{version.modal_text1_success[0]}<span>{version.modal_text1_success[1]}</span>{version.modal_text1_success[2]}</p>
                        <p className="hurry">{version.modal_text2_success}</p>
                        <div className="time">
                            <p>{this.state.time.minutes}:{this.state.time.seconds}</p>
                        </div>
                        <Regform {...this.props} class={'inmodal'}/>
                    </div>
                </div>
            </div>
        )
    }
}
