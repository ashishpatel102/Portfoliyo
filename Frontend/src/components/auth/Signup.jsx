import { useState } from 'react';
import './login.css';
import HostIP from '../services/HostIP';


function Signup({ active, setActive, setActiveLogin }) {
  const temp = { name: '', email: '', password: '' }
  const [Value, setValue] = useState(temp);

  function formHandler(e) {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  }
  function submit(e) {
    e.preventDefault();
    fetch(HostIP+'/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(Value),
    })
      .then((data) => {
        if (!data.ok) return;
        setActiveLogin(0);
        setActive(1);
        return data.json();
      }).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        console.log("response End...");
        setValue(temp);
      })
  }
  return (
    <div className={active ? 'dactive login-container' : 'active login-container'} >
      <div className="login-card">
        <button className="primary-btn btn-close" onClick={() => setActive(1)}>X</button>
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Join us and explore endless possibilities.</p>

        <form className="login-form" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name='name' value={Value.name} placeholder="John Doe" onChange={formHandler} required />
          </div>

          <div className="form-group">
            <label htmlFor="email1">Email Address</label>
            <input type="email" id="email1" name='email' value={Value.email} placeholder="you@example.com" onChange={formHandler} required />
          </div>

          <div className="form-group">
            <label htmlFor="password1">Password</label>
            <input type="password" id="password1" name='password' value={Value.password} placeholder="Create a password" onChange={formHandler} required />
          </div>

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <p className="login-footer">
          Already have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { setActive(1); setActiveLogin(1) }}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
