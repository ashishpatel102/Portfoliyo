import { useState } from 'react';
// import './login.css';
import HostIP from '../services/HostIP';


function ListBox({ close, setClose, setActiveLogin }) {
  const temp = { name: '', email: '', password: '' }
  const [Value, setValue] = useState(temp);


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
    <div id='main' className={!close ? 'dactive login-container' : 'active login-container'}>
      <div className='container'>
        <button className="primary-btn btn-close" style={{position:'sticky',left:'100%'}} onClick={() => setClose(0)}>X</button>
        <h2 className="login-title">Top 5 Projects for Portfolio</h2>

        <div>
          <h3> E-Learning Platform (MERN Stack)</h3>
          <p>
            A full-featured online learning platform with user authentication, course browsing, and interactive content built using React, Node.js, Express, and MongoDB.
            📌 Includes admin panel, secure login, and course management
          </p>
        </div>

        <div>
          <h3>2. Canteen Management System</h3>
          <p>
            A smart digital canteen system for ordering food, tracking orders, and managing inventory.
            📦 Built with MERN stack, with separate interfaces for users and admin
          </p>
        </div>
        <div>
          <h3>3. Exhibition Ticket Booking System</h3>
          <p>
            A dynamic web app to explore exhibitions and book tickets online.
            💳 Integrated payment, user ticket tracking, and admin-level exhibition control
          </p>
        </div>
        <div>
          <h3>4. Java-based E-Commerce Application</h3>
          <p>
            A fully functional shopping site using Java (Spring Boot) with cart system, product listings, and secure checkout.
            🛒 Supports admin panel for product management
          </p>
        </div>
        <div>
          <h3>5. Random Logger (JS Utility Project)</h3>
          <p>
            A creative tool that displays randomly generated log messages in real-time.
            🎯 Ideal for understanding event flow and practicing UI updates using vanilla JavaScript.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ListBox;
