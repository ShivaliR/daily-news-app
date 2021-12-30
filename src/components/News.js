import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
        <div className="container my-3">
            <h2>News App - Top Headlines.</h2>
          <div className="row">
            <div className="col-md-3">
              <NewsItem title="myTitle1" description="myDesc1" imgUrl="https://i.dailymail.co.uk/1s/2021/12/30/09/52365369-0-image-a-17_1640857833599.jpg"/>
            </div>
            <div className="col-md-3">
              <NewsItem title="myTitle2" description="myDesc2" imgUrl="https://i.dailymail.co.uk/1s/2021/12/30/09/52364687-0-image-a-9_1640857545148.jpg" />
            </div>
            <div className="col-md-3">
              <NewsItem title="myTitle3" description="myDesc3" imgUrl="https://i1.prth.gr/images/640x360share/files/2021-12-30/matching.jpg" />
            </div>
          </div>
        </div>
    );
  }
}

export default News;
