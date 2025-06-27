
import { useState, useEffect, useCallback, useContext } from 'react';
import './home.css'
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import ListBox from '../common/ListBox';
import Resume from '../common/Resume';
import Video from '../common/Video';
import CloseContext from '../common/CloseProvider';
import LoginContext from '../common/LoginProvider';
import useVerifyUser from '../services/verifyUser';





function Home({ children }) {
    useVerifyUser();

    const [flag, setFlag] = useContext(CloseContext);
    const [login, setLogin] = useContext(LoginContext);
    const [active, setActive] = useState(0);
    const [close, setClose] = useState(0);
    const [activeSignup, setActiveSignup] = useState(1);
    const [anim, setAnim] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnim((prev) => (prev === 1 ? 0 : 1));
        }, 3000);


        return () => clearInterval(interval);
    }, []);

    const paragraph = `
    
                        👋 Hi, I'm Ashish – a passionate Full Stack Developer with expertise in MERN Stack and Java Full Stack development.

                    My portfolio showcases a wide range of projects, from E-learning platforms and Exhibition management systems to Canteen management apps, built with real-world architecture and scalable backend logic.

                    I love turning complex problems into elegant code, and I’m always exploring the latest in web technologies like React.js, Node.js, MongoDB, Express.js, Bootstrap, and more.

                    Whether it's front-end design or robust backend APIs, I focus on writing clean, efficient, and maintainable code.

                    💼 Tech Stack: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Java, Spring Boot
                    📌 Notable Projects:

                    E-learning Web App (MERN)

                    Canteen Management System

                    Exhibition Booking Portal

                    Java E-commerce App

                    Feel free to explore my projects and get in touch if you’d like to collaborate!
    `

    let temp = new Image();
    const Paragraph = useCallback((e) => {
        console.log(temp)
        temp.style = '';
        temp = e.target;
        e.target.style = 'color:red'
    }, []);
    return (
        <>
            <div style={{ overflow: 'hidden', height: '100vh' }}>

                <div className={`${(flag) ? "animate section" : "section"}`}>
                    <div style={(!anim) ? { transition: '0.5s ease', transform: 'perspective(800px) rotateY(90deg) translate(100%)' } : { transition: '0.5s ease', transform: 'perspective(800px) rotateY(0deg) translate(0%)', height: '100vh', placeContent: 'center' }}>
                        <p style={{ letterSpacing: '30px', color: 'gray', fontSize: '3rem' }}>SOFTWARE ENGINEER</p>
                        <h1 className="amit">Welcome to My Portfolio </h1>
                        <h1>{(login)?login.user.name:'Please Login'}</h1>
                        <p className="description">
                            👋 Hi, I'm Ashish – a passionate Full Stack Developer with expertise in MERN Stack and Java Full Stack development
                        </p>
                        <div className="button-group">
                            <button className="primary-btn" onClick={() => setActive(1)}>Get Started</button>
                            <button className="secondary-btn" onClick={() => setFlag(1)}>PROFILE</button>
                        </div>
                    </div>

                    <div style={(anim) ? { transition: '0.5s ease', transform: 'perspective(800px) scale(0) translateY(0%)' } : { transition: '0.5s ease', transform: 'perspective(800px) scale(1) translateY(-90%)' }}>
                        <h1 style={{ fontSize: '3rem' }}>Top 5 Projects for Portfolio</h1>
                        <p className='p' style={{ fontSize: '1.3rem' }}>
                            A creative JavaScript-based mini project that generates and displays random logs dynamically.
                            Useful for simulating live logs, testing consoles, or visualizing how events are triggered and recorded randomly in real-time
                        </p>


                        <div className="button-group">
                            <button className="primary-btn" onClick={() => setActive(1)}>Get Started</button>
                            <button className="secondary-btn" onClick={() => setClose(1)}>Show</button>
                        </div>
                    </div>
                </div>




                <div className={`${(flag) ? (flag == 2) ? 'animate section' : "animate1 section":" animate section"}`}>

                    <div className='p' style={{ cursor: 'pointer', fontSize: '1.4rem', width: '70%' }}>
                        {
                            paragraph.split('').map((item,index) => {
                                return <font key={index} onMouseOver={Paragraph}>{item}</font>
                            })
                        }
                    </div>


                    <div className="button-group">
                        <button className="secondary-btn" onClick={() => setFlag(0)}>⬅ Back To More</button>
                        <button className="primary-btn" onClick={() => setFlag(2)}>PROJECT</button>
                    </div>

                    <br /><br />


                </div>
                <div
                    className={`${flag
                        ? flag === 2
                            ? 'animate2 section'
                            : 'animate1 section'
                        : 'animate section'
                        }`}
                >
                    <h2 className="section-title">My PROJECT</h2>
                    <p className="section-desc">
                        We provide cutting-edge tools and solutions to help you scale your business, improve user engagement, and deliver stunning digital experiences.
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <h4>🚀 Canteen Management System</h4>
                            <p>A smart digital canteen system for ordering food, tracking orders, and managing inventory.
                                📦 Built with MERN stack, with separate interfaces for users and admin</p>
                        </div>
                        <div className="feature-card">
                            <h4>🎨Java-based E-Commerce Application</h4>
                            <p>A fully functional shopping site using Java (Spring Boot) with cart system, product listings, and secure checkout.
                                🛒 Supports admin panel for product management</p>
                        </div>
                        <div className="feature-card">
                            <h4>🔐 E-Learning Platform (MERN Stack)</h4>
                            <p>A full-featured online learning platform with user authentication, course browsing, and interactive content built using React, Node.js, Express, and MongoDB.
                                📌 Includes admin panel, secure login, and course management</p>
                        </div>
                    </div>

                    <button className="secondary-btn mt-4" onClick={() => setFlag(1)}>
                        ⬅ Back To More
                    </button>

                    <button className="primary-btn" onClick={() => setFlag(3)}>EDUCATION</button>
                    <br /><br /><br />
                </div>



                <div
                    className={`${flag
                        ? flag === 3
                            ? 'animate3 section'
                            : 'animate2 section'
                        : 'animate section'
                        }`}
                >
                    <h2 className="section-title">EDUCATION</h2>
                    <p className="section-desc">
                        Hii I Am Ashish Patel My All Aducation Info
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <h4>🚀 BCA</h4>
                            <h4>BACHELOR OF COMPUTER APPLICATIONS</h4>
                            <p>2022-2025
                                Allahabad State University</p>
                        </div>
                        <div className="feature-card">
                            <h4>🎨CCC</h4>
                            <p>2022 <br /> Hitech College</p>
                        </div>
                        <div className="feature-card">
                            <h4>12TH (UP BOARD)</h4>
                            <p>Janata Inter Collage
                                2020-2022</p>
                        </div>
                    </div>

                    <button className="secondary-btn mt-4" onClick={() => setFlag(2)}>
                        ⬅ Back To More
                    </button>
                    <button className="primary-btn" onClick={() => setFlag(4)}>EDUCATION</button>
                    <br /><br /><br />
                </div>



                <div
                    className={`${flag
                        ? flag === 4
                            ? 'animate4 section'
                            : 'animate3 section'
                        : 'animate section'
                        }`}
                >
                    <h2 className="section-title">SKILLS</h2>
                    <p className="section-desc">
                        Hii I Am Ashish Patel My Skils Info
                    </p>

                    <div className="features-grid">
                        <ul>
                            <li>MERN Full Stack</li>
                            <li> C Language</li>
                            <li>MongoDB</li>
                            <li>Java Full Stack</li>
                            <li>DSA Using C</li>
                            <li>SOL</li>

                        </ul>
                    </div>
                    <h2 className="section-title">LANGUAGES</h2>
                    <p>Hindi</p>
                    <p>English (basic)</p>

                    <button className="secondary-btn mt-4" onClick={() => setFlag(3)}>
                        ⬅ Back To More
                    </button>
                    <button className="primary-btn" onClick={() => setFlag(5)}>Contact</button>
                    <br /><br /><br />
                </div>



                <div
                    className={`${flag
                        ? flag === 5
                            ? 'animate5 section'
                            : 'animate4 section'
                        : 'animate section'
                        }`}
                >
                    <h2 className="section-title">Contact</h2>
                    <p className="section-desc">
                        Hii I Am Ashish Patel My Skils And Performens Very Large No doubt my Performantion
                    </p>

                    <div className="features-grid">
                        <ul>
                            <li>Number : 7525847163</li>
                            <li> Email : ashishshen20@gmail.com
                            </li>
                            <li>Address : prayagraj
                            </li>
                            <li><a href="https://www.linkedin.com/in/a
shish-patel-2b2b702a9/
">Linkdin</a></li>
                            <li>DSA Using C</li>
                            <li>SOL</li>

                        </ul>
                    </div>

                    <button className="secondary-btn mt-4" onClick={() => setFlag(4)}>
                        ⬅ Back To More
                    </button>
                    <br /><br /><br />
                </div>
                <Signup active={activeSignup} setActive={setActiveSignup} setActiveLogin={setActive} />
                <Login active={active} setActive={setActive} setActiveSignup={setActiveSignup} />
                <ListBox close={close} setClose={setClose} />
                <Resume  />
                <Video  />
            </div>

        </>
    );
}

export default Home;