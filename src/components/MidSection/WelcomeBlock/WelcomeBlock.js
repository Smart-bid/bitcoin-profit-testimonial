import React from 'react'
import mobile from './appPhoneMockup.png'

const Welcome = (props) => {
    let version = props.languageManager();
    return (
        <div className={"Welcome"}>
            <div className="innersection">
                <div className="content">
                    <div className="title">{version.welcome_title}</div>
                    <div className="subtitle">{version.welcome_subtitle}</div>
                    <div className="flex-block">
                        <div className="item left">{version.welcome_left_text}</div>
                        <div className="item center">
                            <img src={mobile} alt="phone"/>
                        </div>
                        <div className="item right">{version.welcome_right_text}</div>
                    </div>
                </div>
            </div>
            <Explanation {...props}/>
        </div>
    )
}

const Explanation = (props) => {
    let version = props.languageManager();
    return (
        <div className={"Explanation"}>
            <div className="content">
                <div className="title">{version.explanation_title}</div>
                <div className="subtitle">{version.explanation_subtitle}</div>
                <div className="text">
                    <p>{version.explanation_text[0]}</p>
                    <p>{version.explanation_text[1]}</p>
                </div>
            </div>
        </div>
    )
}


export default Welcome;
