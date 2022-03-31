import React from 'react'
import { connect } from '../../server/routes/user.routes'

function LoginPage(setUser) {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const navigate = useNavigate();

    const handleLogin = useCallback(async () => {
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;
        if (
            username.length < 2 ||
            username.length > 16 ||
            password.length < 2 ||
            password.length > 16
        ) {
            return;
        }
        const json = await login(username, password);
        console.log(json);
        //! remove console log here
        if (!json.success) {
            console.log(json.error);
        } else {
            setUser(json.data);
            navigate("/search")
        }
    }, [])
    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <label htmlFor='username'>Enter Username: </label>
                <input ref={usernameInput} type="text" id="username" />
            </div>
            <div>
                <label htmlFor='password'>Enter Password: </label>
                <input ref={passwordInput} type="text" id="password" />
            </div>
            <button onClick={handleLogin} />
        </div>

    )
}



const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = {
    setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)