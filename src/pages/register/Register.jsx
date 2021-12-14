import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect with friends and talk about your book. </span>

                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="Username" />
                        <input type="email" className="loginInput" placeholder="Email" />
                        <input type="email" className="loginInput" placeholder="Password" />
                        <input type="password" className="loginInput" placeholder="Password again" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login into your Account</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
