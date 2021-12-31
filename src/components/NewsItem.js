import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;//destructuring in javascript
    return (
      <div className="container mx-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl?imgUrl:"https://images.livemint.com/img/2021/12/31/600x338/rupee-dollar-kth--621x414@LiveMint_1640930777410.jpg" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>

        
      </div>
    );
  }
}

export default NewsItem;
