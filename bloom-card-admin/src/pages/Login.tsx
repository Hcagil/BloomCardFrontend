import React, { useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const LoginComponent = () => {
  const { keycloak } = useKeycloak();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    keycloak.login(); // Keycloak login sayfasına yönlendirme
  };

  const handleRegister = () => {
    keycloak.register(); // Keycloak register sayfasına yönlendirme
  };

  return (
    <div className="login-container">
      <h2>Sign in to your account</h2>
      <p>Experience the power of networking</p>

      <form onSubmit={handleLogin}>
        <label>Email*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password*</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Sign in</button>
      </form>

      <div className="login-options">
        <a href="#">Forgot your password?</a>
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>

      <button className="google-login">Sign in with Google</button>

      <p>
        Don't have an account?{' '}
        <a href="#" onClick={handleRegister}>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginComponent;
