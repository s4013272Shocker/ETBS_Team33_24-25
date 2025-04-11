import React, { useState } from 'react';
import '../components/SignInSignUp.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignInSubmit = (e) => {
        e.preventDefault();

        console.log('SignIn submitted:', { email, password });

    };

    return (
        // replace with authentication logic
        <form onSubmit={handleSignInSubmit} className="signin-form">
            <div className="form-group">
                <label htmlFor="email" className="form-label">Username or Email</label>
                <input
                    type="text"
                    id="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button type="submit" className="form-submit-button">Sign In</button>
        </form>
    );
};

export default SignIn;
