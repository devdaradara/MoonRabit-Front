import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Join.css"

function Join() {      
  const [userEmail, setUsername] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  
  return (    
    <div>
      <div className="login-title">회원가입</div>
      <div className="write-form">
        <div className="cont-title">e-mail</div>
        <div className="useremail-wrapper">
          <input
            type="text"
            name="userEmail"
            value={userEmail}
            id="user-email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="cont-title">Password</div>
        <div className="password-wrapper">
          <input
            type="text"
            name="password"
            id="password"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="cont-title">Confirm Password</div>
        <div className="confirm-wrapper">
          <input
            type="text"
            name="confirm"
            id="confirm-password"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="join-button">
        <button className="join-page-btn" onClick={() => navigate("/join")}>
          회원가입
        </button>
      </div>
    </div>
  )
} 

export default Join;

