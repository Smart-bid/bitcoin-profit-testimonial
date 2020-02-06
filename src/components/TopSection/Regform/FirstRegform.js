import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Reginputs, errorMessages} from 'sb-lp-framework'

class FirstRegform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                first_name: '',
                last_name: '',
                email: ''
            },
            errors: {},
            redirect: false,
            responseError: ''
        }
    }


    componentDidMount() {
        if (this.props.location.state) this.setState({form: Object.assign(this.state.form, this.props.location.state.form), responseError: this.props.location.state.responseError})
    }

    breakLine = () => {
        const [first_name, ...last_name] = this.state.form.first_name.split(' ');
        this.setState({
            form: {
                ...this.state.form,
                last_name: last_name.join(' '),
                first_name
            }
        }, () => {this.saveData()})
    }

    saveData = () => {
        if (this.state.form.last_name === '') {
            this.setState({
                errors: {first_name: {messages: ["Please, enter your full name."]}}
            })
        } else {
            let form = this.state.form
            let checkParams = this.props.validateParams(form)
            if (checkParams.success) this.setState({errors: {}}, () => {
                this.props.setLeadData(form).then(this.props.handleLeadStep).then(this.setState({redirect: true}, () => {console.log(this.state.redirect)}))
            })
            else this.setState({errors: checkParams.errors})
        }
    }

    render() {
        let languageManager = this.props.languageManager(),
        stepone = {
            inputs: [
                {
                    name: 'first_name',
                    type: 'text',
                    className: 'inputfield small-input',
                    errorClass: 'inputError',
                    groupClass: 'form_group'
                },
                {
                    name: 'email',
                    type: 'email',
                    className: 'inputfield small-input',
                    errorClass: 'inputError',
                    groupClass: 'form_group'
                }
            ],
        }

        if (!this.state.redirect) {
            return (
                <div className="FirstRegform Regform">
                    <div className='inner'>
                        <div className='form-wrapper'>
                            <div className="errors">{this.state.responseError}</div>
                            <Reginputs
                                {...stepone}
                                form={this.state.form}
                                trackStartEdit={this.props.trackStartEdit}
                                languageManager={languageManager}
                                errors={this.state.errors}
                                onChange={form => this.setState({form})}
                                onFocus={() => {}}/>
                            <div className="btn-block">
                                <button onClick={this.breakLine} className='start' >{languageManager.button}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )

        } else {
            return <Redirect to={{ pathname: '/success',
                search: this.props.location.search,
                state: this.state}}/> }

    }
}
export default FirstRegform;
