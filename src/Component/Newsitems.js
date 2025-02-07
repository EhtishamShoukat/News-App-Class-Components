import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "80%", zindex: "1" }}
          >
            {source}
          </span>
          <img
            src={urlToImage ? urlToImage : require("./pics.jpg")}
            className="card-img-top"
            alt="Sample Image"
          />

          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="visually-hidden">Unread Message</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
