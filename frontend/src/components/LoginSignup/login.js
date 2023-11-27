import { useState } from 'react';
import './login.css'
function Login() {
    const [action, setaction] = useState('signup-container');
    return (
        <div className='loginsignup'>
            <div className='loginsignupcontainer'>

                <div className='btn'>
                    <button className={action === 'signup-container' ? "signup-btn toggle" : "signup-btn"} onClick={() => { setaction("signup-container") }}>Sign Up</button>
                    <button className={action === 'login-container' ? "login-btn toggle" : "login-btn"} onClick={() => { setaction("login-container") }}>Login</button>
                </div>
                <div className={action==='signup-container'?'signup-container':'signup-container hide'}>
                    <h2>Create A New Account</h2>
                    <form action="#" method="post">
                        <label for="FirstName">First name:</label>
                        <input type="text" id="fname" name="fname" required />
                        <label for="LastName">Last name:</label>
                        <input type="lname" id="lname" name="lname" required />
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                        <label for="confirmpassword">Confirm Password:</label>
                        <input type="cpassword" id="cpassword" name="cpassword" required />
                        <button className='submit-btn' type="submit">Signup</button>
                    </form>
                </div>
                <div class= {action==="login-container"?'login-container':'hide'}>
                    <h2>Login to Your Account</h2>
                    <form action="#" method="post">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                        <button className='submit-btn' type="submit">Login</button>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default Login;