import React, { useState } from 'react';
import '../components/SignInSignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('SignUp submitted:', { email, password });
    };


    return (
        <form onSubmit={handleSignUpSubmit} className="signup-form">
            <div className="form-group">
                <label htmlFor="signup-email" className="form-label">Email</label>
                <input
                    type="email"
                    id="signup-email"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="signup-password" className="form-label">Password</label>
                <input
                    type="password"
                    id="signup-password"
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    className="form-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                />
            </div>
            <button type="submit" className="form-submit-button">Sign Up</button>
        </form>
    );
};

export default SignUp;
