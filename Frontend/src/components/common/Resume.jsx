import { useContext, useState } from 'react';
// import './login.css';
import HostIP from '../services/HostIP';

import resume from '../services/resume.pdf'
import StateContext from './StateProvider';



function Resume() {
  const temp = { name: '', email: '', password: '' }
  const [Value, setValue] = useState(temp);
  const [get , set] = useContext(StateContext);


  function formHandler(e) {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  }
  function submit(e) {
    e.preventDefault();
    fetch(HostIP + '/auth/login', {
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
    <>
    <div id='main' className={get ? 'dactive login-container' : 'active login-container'} >
      <div className="container login-card" >
        <button className="primary-btn btn-close" style={{position:'sticky',left:'100%'}} onClick={() => set(1)}>X</button>
        <h2 className="login-title">My Resume</h2>

        {/* <div > */}
  <iframe 
    src={resume} 
     frameBorder="0" 
    width="100%" 
    height="100%" 
    style={{border: 'none'}}
  >
    Your browser does not support iframes.
  </iframe>
{/* </div> */}


      </div>
    </div>
    </>
  );
}

export default Resume;
