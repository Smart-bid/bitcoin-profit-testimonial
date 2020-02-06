import React, { Component } from 'react'
import VideoBlock from "./VideoBlock/VideoBlock";
import first from '../../versions/videos/first.mp4'
import second from '../../versions/videos/second.mp4'
import third from '../../versions/videos/third.mp4'
import ImageBlock from "./ImageBlock/ImageBlock";
import Welcome from "./WelcomeBlock/WelcomeBlock";

export default class MidSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: {
                first,
                second,
                third
            }
        }
    }
    render() {
        let version = this.props.languageManager();
        const path = this.props.location.pathname;

        return (
            <div className="MidSection">
                {
                    (path === '/')
                    ? ""
                    : <Welcome {...this.props} />
                }
                <div className="innersection">
                    <div className="content">
                        <div className="title">{version.qna_title}</div>
                        <div className="subtitle">{version.qna_subtitle}</div>
                        <div className="rows">
                            <div className="top">
                                {
                                    version.qna.slice(0,3).map((item, index) => {
                                        return (
                                            <div className="item" key={index}>
                                                <div className="column">
                                                    <div className="qindex">Q{index+1}</div>
                                                    <div className="aindex">A{index+1}</div>
                                                </div>
                                                <div className="column">
                                                    <div className="q"><span>{item.q}</span></div>
                                                    <div className="a">{item.a}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="bottom">
                            {
                                    version.qna.slice(3,6).map((item, index) => {
                                        return (
                                            <div className="item" key={index+3}>
                                                <div className="column">
                                                    <div className="qindex">Q{index+4}</div>
                                                    <div className="aindex">A{index+4}</div>
                                                </div>
                                                <div className="column">
                                                    <div className="q"><span>{item.q}</span></div>
                                                    <div className="a">{item.a}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="innersection">
                    <div className="content">
                        <div className="title">{version.mem_title}</div>
                        <div className="subtitle next">{version.mem_subtitle}</div>
                        <div className="rows">
                            <VideoBlock {...this.props} video={this.state.videos} />
                            <ImageBlock />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
