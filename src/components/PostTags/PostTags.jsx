import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import "./PostTags.scss";

export default class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map((tag, index) =>
            (<Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button className="tag" data-id={index}>
                {tag}
              </button>
            </Link>)
          )}
      </div>
    );
  }
}