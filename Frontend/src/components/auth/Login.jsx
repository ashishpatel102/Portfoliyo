import { useContext, useState } from 'react';
import './login.css';
import HostIP from '../services/HostIP';
import LoginContext from '../common/LoginProvider';



function Login({ active, setActive, setActiveSignup }) {
  const temp = { email: '', password: '' }
  const [Value, setValue] = useState(temp);
  
    const [login, setLogin] = useContext(LoginContext);

  function formHandler(e) {
    const { id, value } = e.target;
    setValue({ ...Value, [id]: value });
  }
  function submit(e) {
    e.preventDefault();
    fetch(HostIP+'/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(Value),
    })
      .then((data) => {
        if (!data.ok) return;
        setActiveSignup(1);
        setActive(0);
        return data.json();
      }).then((data) => {
        // console.log(data);
        setLogin(data);

      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        console.log("response End...");
        setValue(temp);
      })
  }

  return (
    <div className={active ? 'active login-container' : 'dactive login-container'}>
      <div className="login-card">
        <button className='primary-btn btn-close' onClick={() => setActive(0)}>X</button>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please enter your credentials to log in.</p>

        <form className="login-form" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={Value.email} placeholder="you@example.com" onChange={formHandler} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={Value.password} placeholder="Enter your password" onChange={formHandler} required />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="login-footer">
          Don’t have an account? <span onClick={() => { setActiveSignup(0); setActive(0) }} style={{ color: 'blue', cursor: 'pointer' }}>Sign up</span>
        </p>
      </div>
    </div>


  );
}

export default Login;
