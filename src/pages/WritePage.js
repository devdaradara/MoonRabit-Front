import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/WritePage.css";

const WritePage = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const navigate = useNavigate();

  return (
    <div className="write-page">
      <div className="write-form">
        <div className="write-wrapper">
          <div className="write-title">Name</div>
          <div className="write-value-wrapper">
            <input
              type="text"
              name="username"
              value={name}
              id="write-name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="write-wrapper">
          <div className="write-title">Content</div>
          <div className="write-value-wrapper">
            <textarea
              type="text"
              name="content"
              id="write-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className="write-wrapper">
          <div className="write-title">Tag</div>
          <div className="write-value-wrapper">
            <input
              type="text"
              name="tag"
              id="write-tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
        </div>

        <div className="write-wrapper">
          <div className="write-title">Image</div>
          <div className="write-value-wrapper">
            <input type="file" name="image" id="write-image" alt="사진" />
          </div>
        </div>
      </div>

      <div className="write-btn-wrapper">
        <button className="write-send-btn" type="submit">
          Send
        </button>
        <button
          className="write-cancel-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WritePage;