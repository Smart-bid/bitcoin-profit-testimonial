import React from 'react'
import ReactQueryParams from 'react-query-params'
import {Route, Switch, withRouter} from 'react-router-dom'
import withQueryString from './components/withQueryString'

import TopSection from './components/TopSection/TopSection'
import MidSection from './components/MidSection/MidSection'
import BottomSection from './components/BottomSection/BottomSection'
import Page from './pages/Page'

// Pages
import pages from './pages'

class App extends ReactQueryParams {
    constructor(props) {
        super(props);
        this.state = {
            page: 'main',
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

        return (

            <div className='App'>
                <Switch>
                    <Route exact path='/' render={() =>
                        <>
                            <div className={`fixed-block ` + this.state.hide_block}>

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
                        </>
                    }/>
                    <Route exact path='/success' render={() =>
                        <>
                            <TopSection {...this.props}
                                        handleStep={(step) => this.setState({step})}
                                        syncForms={(form) => this.setState({form})}
                                        syncErrors={(errors) => this.setState({errors})}
                                        syncState={this.state}/>
                        </>
                    }/>
                    {/*{Object.keys(pages).map(page =>
                        <Route path={'/' + page} key={page} render={() => <Page page={pages[page]}/> }/>
                    )}*/}
                </Switch>
            </div>
        )
    }
}

export default withRouter(withQueryString(App))
