import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Naver from "../images/naver.png"
import "../css/Login.css"

function LoginPage() {
  const [userEmail, setUsername] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  
  return (    
    <div>
      <div className="login-title">로그인</div>
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
      </div>
        <div className="naver-wrapper">
          <button
            className="naver-btn"
          >
            <img
              className="naver-icon"
              alt="네이버"
              src={Naver}
            />
            네이버 계정으로 로그인
          </button>
        </div>
      <div className="buttons">
        <button
          className="login-page-btn"
        >
          로그인
        </button>
        <button className="join-btn" onClick={() => navigate("/join")}>
          회원가입
        </button>
      </div>
    </div>
  )
}

export default LoginPage;
