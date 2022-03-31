import React from 'react'
import { connect } from '../../server/routes/user.routes'

function LoginPage(setUser) {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const navigate = useNavigate();
    return (
        <h1>Login Page</h1>
    )
}



const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = {
    setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)