import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, image_url, newsUrl, author, date} = this.props;//destructuring in javascript
    return (
      <div className="container">
        <div className="card" style={{ height: "50%" }}>
          <img src={image_url?image_url:"https://images.livemint.com/img/2021/12/31/600x338/rupee-dollar-kth--621x414@LiveMint_1640930777410.jpg" } onError={(e)=>{e.target.onerror = null; e.target.src="https://images.livemint.com/img/2021/12/31/600x338/rupee-dollar-kth--621x414@LiveMint_1640930777410.jpg"}}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">By <b><i>{author}</i></b> on {date}</p>
      
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>

        
      </div>
    );
  }
}

export default NewsItem;
