import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { LpFramework, LpFrameworkWrapper } from 'sb-lp-framework'
import * as versions from './versions'

ReactDOM.render(
    <BrowserRouter>
        <LpFramework
            funnel_name={"Bitcoin Profit (testimonials)"}
            resourceFile={versions}>
            <LpFrameworkWrapper Component={App}/>
        </LpFramework>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
