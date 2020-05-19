import React , {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink ,Redirect} from 'react-router-dom';
import Aux from '../../../../hoc/Auxillary';
import TextInputs from '../../../../components/Ui/Forms/TextInput/TextInput';
import Button from '../../../../components/Ui/Button/Button'
import ImageUi from '../../../../components/Ui/ImageuI/ImageUi';
import Img1 from '../../../../assets/images/vote3.png';
import classes from './Signup.module.css';
import Preloader from '../../../../components/Ui/Preloader/Preloader';
import {signUp, mismatch} from '../../../../store/actions/auth';



class Signup extends Component {

    state = {
        email : null,
        username : null,
        phone: null,
        password: null,
        confirmPwd: null
    }

    inputHandler = (event, item ) => {
        const updateFields = {
            ...this.state,
            [item]: event.target.value
        }
        this.setState(updateFields);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const {email, username, phone, password, confirmPwd} = this.state;
        if( confirmPwd !== password ){
            this.props.mismatch();
        }else{
            this.props.onSignUp(email, username, phone, password);
        }
        
    }

    render(){
        const config = {
            name: ['email', 'username','phone',  'password', 'confirmPwd'],
            type: ['text', 'text', 'number', 'password', 'password'],
            icon: ['mail', 'account_circle', 'phone', 'security', 'security']
        }
        let form = (
            <Aux>
                <div className='row z-depth-5'>
                <h5 className={classes.register} align='center' >Get Started With VClique</h5>
                <p align='center' style={{color:'red'}} >{ this.props.signupMsg ? 'Email already exist' : null }</p>
                <p align='center' style={{color:'red'}} >{ this.props.pwdMismatch }</p>
                <p align='center' style={{color:'red'}} >{ this.props.error}</p>
                        <form className="col s12" onSubmit={this.onSubmitHandler} >
                            
                            {config.name.map( (item, index) => (
                                <TextInputs key={index} inputid={item} iconname={config.icon[index]}  inputtype={config.type[index]} labelname={item} changed={(event) =>  this.inputHandler(event, item) } />
                            ) )}
                           
                            <div align='center' >
                            <Button action='submit' btncolour='indigo' btnname='Register'  iconname='directions_bike'  />
                        </div>
                                <div>
                                    <p className={classes.register}>Alread have an account?<NavLink  style={{color: 'indigo'}} to='/login' > <u>Login</u></NavLink></p> 
                                </div>
                        </form>
                        </div>
            </Aux>
        );

        if( this.props.loading){
            form = <Preloader />
        }
        if( this.props.toBeRedirected && this.props.signupMsg !== 'Email already exist'){
           return <Redirect to='/login' />
        }

        return (
            <Aux>
                <div className='container' style={{paddingBottom: '100px'}} > <br></br>
                <div align='center '>
                <ImageUi width ='300' imagName={Img1} /> <br /> <br />
                </div>
                   {form}
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        toBeRedirected: state.auth.toBeRedirected,
        signupMsg: state.auth.signupMsg,
        pwdMismatch: state.auth.mismatch
    }
}

const mapPropsToState = dispatch => {
    return {
        onSignUp:(email, username,phone,password) => { dispatch(signUp( email, username,phone,password )) },
        mismatch: () => { dispatch(mismatch()) }
    }
}

export default connect(mapStateToProps, mapPropsToState)(Signup);