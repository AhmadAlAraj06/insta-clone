import React from "react";
import "./profile.css";
import insta from "../login/iii.png";
import profilePic from "../home/profilepic.png";
import p1 from "./ankara.png";
import p2 from "./alarajstocks.png";
import p4 from "./lxrchooice.png";
import p3 from "./Rest.png";
import p6 from "./grabone.png";
import p5 from "./portfoilo.png";

const Profile = () => {
  return (
    <div className="App">
      <div className="header1">
        <img src={insta} className="instaHome" />
        <br />
        <div className="sss">
          <input placeholder="Search.." className="searchbar1" />
        </div>
        <div className="iconss">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-chat"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-compass"
            viewBox="0 0 16 16"
          >
            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          <img src={profilePic} className="profilepidd" />
        </div>
      </div>
      <div className="header23">
        <img src={profilePic} className="profilepicc" />
        <div className="profileNmaep">
          ahmad_ala3raj <button className="btnedit">Edit Profile</button>
        </div>
        <div className="profilefolwers">
          <h4>6 posts</h4>
          <h4 className="floo">1,101 followers</h4>
          <h4 className="floo">253 following</h4>
        </div>
        <div className="profilebio">
          Extremely motivated to constantly develop my
          <br /> skills and grow professionally. I am confident in <br />
          my ability to come up with interesting ideas
        </div>
        <br />
        <br />
        <hr className="aahr" />
        <div className="profilepic1">
          <a href="http://artco-jo.com/" target="_blank">
            {" "}
            <img src={p1} className="piccc" />
          </a>
          <a href="https://alarajstock.com/" target="_blank">
            {" "}
            <img src={p2} className="piccc" />
          </a>
          <a href="https://rest-movie.herokuapp.com/" target="_blank">
            {" "}
            <img src={p3} className="piccc" />
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="profilepic1">
          <a
            href="https://ahmadalaraj06.github.io/Luxury-Choice/#about-us"
            target="_blank"
          >
            {" "}
            <img src={p4} className="piccc" />
          </a>
          <a
            href="https://ahmadalaraj06.github.io/portfolio/index.html"
            target="_blank"
          >
            {" "}
            <img src={p5} className="piccc" />
          </a>
          <a href="https://meraki-task.herokuapp.com/" target="_blank">
            {" "}
            <img src={p6} className="piccc" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
