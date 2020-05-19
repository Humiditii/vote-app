import React, {Component} from 'react';
import {connect} from 'react-redux'
import Aux from '../../../hoc/Auxillary';
import CardPanel from '../../../components/Ui/Card/CardPanel/CardPanel';
import Preloader from  '../../../components/Ui/Preloader/Preloader'
import { dashboardProcess } from '../../../store/actions/voteSetup';
import {checkAuthState} from '../../../store/actions/auth';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getDashboardDetails(this.props.token)
        this.props.onAutoSignin()
    }
    render(){
        if(!this.props.token){
            return <Redirect to='/login' />
        }
        return (
            <Aux>
                <div className='container-fluid'>
                    <CardPanel title='Dashboard' >
                             <blockquote>
                                Summary of your actions here:-
                            </blockquote>
                    </CardPanel>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const mapPropstoState = dispatch => {
    return {
        getDashboardDetails: (token) => { dispatch(dashboardProcess(token)) },
        onAutoSignin: () => { dispatch(checkAuthState()) }
    }
}


export default connect(mapStateToProps, mapPropstoState)(Dashboard);

