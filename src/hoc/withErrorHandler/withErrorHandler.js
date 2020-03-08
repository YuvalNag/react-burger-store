import React, { Fragment, Component } from 'react'
import Model from '../../components/UI/Modal/Modal'


const withErrorHandler = (WrappedCompnent, axios) => {

    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(null, request => {
                this.setState({ error: null })
                return request
            })
            this.resInterceptor = axios.interceptors.response.use(response => response, error => this.setState({ error: error }))
        }
        componentWillUnmount() {
            // console.log("will unmount",this.reqInterceptor ,this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        modelConfirmedHandler = () => this.setState({ error: null })
        render() {
            return (
                <Fragment>
                    <Model show={this.state.error} modelClosed={this.modelConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrappedCompnent {...this.props} />
                </Fragment>
            )
        }
    }
}
export default withErrorHandler