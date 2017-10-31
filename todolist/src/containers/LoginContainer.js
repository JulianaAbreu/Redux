import { connect } from 'react-redux'
import { login } from '../actions/LoginAction'
import Login from '../components/Login'

const mapStateToProps =  {
    error: state.error
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch(login)
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Login)