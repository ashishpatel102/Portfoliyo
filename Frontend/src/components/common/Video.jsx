import { useContext, useState } from 'react';
import StateContext from './StateProvider';



function Video() {
  const [get, set, video, setVideo] = useContext(StateContext);

  return (
    <>
      <div id='main' className={video ? 'dactive login-container' : 'active login-container'} >
        <div className="container login-card" >
          <button className="primary-btn btn-close" style={{ position: 'sticky', left: '100%' }} onClick={() => setVideo(1)}>X</button>
          <h2 className="login-title">My Resume</h2>

            <iframe
              width="100%"
              height="100%"
              src={!video ? "https://www.youtube.com/embed/LX3r_rm2Vfw?autoplay=1&mute=1":"https://www.youtube.com/embed/LX3r_rm2Vfw"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>



        </div>
      </div>
    </>
  );
}

export default Video;
