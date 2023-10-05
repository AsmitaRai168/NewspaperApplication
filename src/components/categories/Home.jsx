import React, { useState } from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Paginationdata from "../Pagination/Paginationdata";
import EditpickTrending from "../EditpickTrending/EditpickTrending";
import Article from "../Articles/Article";
import { ArticleData } from "../../dummy_data/data";

import SweetPagination from "sweetpagination";

const Home = () => {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  return (
    <>
      <div className="main-container">
        <div className="News-container">
          <div className="articles-container">
            <h3 className="article-heading">article</h3>
            <div className="home-article-container">
              {currentPageData.length > 0 &&
                currentPageData.map((each, _i) => (
                  <Article
                    title={each?.title}
                    description={each?.des}
                    images={each?.image}
                    author={each?.author}
                  />
                ))}
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SweetPagination
                currentPageData={setCurrentPageData}
                getData={ArticleData}
                dataPerPage={5}
              />
            </div>
          </div>
          {/*second division*/}
          <div className="Editorpick-trending-container">
            <EditpickTrending />
          </div>
          {/* 3rd  division */}
          <div className="pagination-container">
            <Paginationdata />
          </div>
          {/* footer*/}
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
