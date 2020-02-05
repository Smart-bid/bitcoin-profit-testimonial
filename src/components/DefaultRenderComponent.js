import React, {Component} from 'react'
import Regform from "./TopSection/Regform/Regform";
import TopSection from "./TopSection/TopSection";
import MidSection from "./MidSection/MidSection";
import BottomSection from "./BottomSection/BottomSection";

export default class DefaultRenderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide_block: false
        }
    }

    handleScroll = () => {
        let scrollTop = window.scrollY;
        if (scrollTop >= 1000) {
            this.setState({
                hide_block: true
            })
        } else {
            this.setState({
                hide_block: false
            })
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let version = this.props.languageManager();
        return (
            <div className="DefaultRenderComponent">
                <div className={`fixed-block ` + this.state.hide_block}>
                    <div className="content-block">
                        <p>{version.top_form}</p>
                        <Regform {...this.props} />
                    </div>
                </div>

                <TopSection {...this.props}
                            handleStep={(step) => this.setState({step})}
                            syncForms={(form) => this.setState({form})}
                            syncErrors={(errors) => this.setState({errors})}
                            syncState={this.state}/>

                <MidSection {...this.props}/>

                <BottomSection {...this.props}
                               handleStep={(step) => this.setState({step})}
                               syncForms={(form) => this.setState({form})}
                               syncErrors={(errors) => this.setState({errors})}
                               syncState={this.state}/>
            </div>
        )
    }
}