import React from "react";
import Article from "../Articles/Article";
import Footer from "../Footer/Footer";
import { PoliticalData } from "../../dummy_data/data";
import "./Politics.css";
const Politics = () => {
  return (
    <div>
      <div className="poltical-article-container">
        {PoliticalData.length > 0 &&
          PoliticalData.map((each, _i) => (
            <Article
              title={each.title}
              images={each.image}
              description={each.des}
              author={each.author}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Politics;
