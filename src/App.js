import React from 'react'
import ReactQueryParams from 'react-query-params'
import {Route, Switch, withRouter} from 'react-router-dom'
import withQueryString from './components/withQueryString'
import DefaultRenderComponent from "./components/DefaultRenderComponent";
import SuccessRenderComponent from "./components/SuccessRenderComponent";
import Page from './pages/Page'
// Pages
import pages from './pages'


class App extends ReactQueryParams {
    constructor(props) {
        super(props);
        this.state = {
            page: 'main',
        }
    }

    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' render={() =>
                        <DefaultRenderComponent {...this.props}/>
                    }/>
                    <Route exact path='/success' render={() =>
                        <SuccessRenderComponent {...this.props}/>
                    }/>
                    {Object.keys(pages).map(page =>
                        <Route path={'/' + page} key={page} render={() => <Page page={pages[page]}/> }/>
                    )}
                </Switch>
            </div>
        )
    }
}

export default withRouter(withQueryString(App))
