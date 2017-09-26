import React from "react";
import Link from "gatsby-link";
import PostTags from "../PostTags/PostTags";
import styles from "./PostListing.module.scss";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {postList.map(post =>
          (
            <div>
            <Link to={post.path} key={post.path}>
            <h1 key={post.title}>
              {post.title}
            </h1>
          </Link>
          <div className="post-meta" key={post.tags}>
            <PostTags tags={post.tags} />
          </div>
          </div>
          )
        )}
      </div>
    );
  }
}

export default PostListing;
