import React from 'react'
import VideoPlayer from "../../TopSection/VideoPlayer/VideoPlayer";

const VideoBlock = (props) => {
    let version  = props.languageManager();
    return (
        <div className='VideoBlock'>
            <div className="bottom">
                {
                    version.mems.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="video-block">
                                    <VideoPlayer video_link={props.video[item.video_url]} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
export default VideoBlock;