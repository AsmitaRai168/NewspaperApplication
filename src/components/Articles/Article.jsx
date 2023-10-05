import React from "react";

import "./Article.css";
const Article = ({ title, description, author, images }) => {
  return (
    <div className="main-article-container">
      <div className="newsart-container">
        <figure className="image-container">
          <img
            src={images}
            alt="images"
            className="article-image"
            height={200}
            width={"100%"}
          />
        </figure>
        <div className="article-container">
          <p className="title-container">{title}</p>
          {/* <br /> */}
          <p className="description">{description}</p>

          <p className="author-container">{author}</p>
          {/* <br /> */}
        </div>
      </div>
    </div>
  );
};

export default Article;
