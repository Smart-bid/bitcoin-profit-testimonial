import React, {Component} from 'react'
import MidSection from "./MidSection/MidSection";
import BottomSection from "./BottomSection/BottomSection";
import TopSectionSuccess from "./TopSection/TopSectionSuccess";

export default class SuccessRenderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide_block: false
        }
    }

    render() {
        let version = this.props.languageManager();
        return (
            <div className="DefaultRenderComponent">
                <TopSectionSuccess {...this.props}
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