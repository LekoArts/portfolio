import React from 'react';
import format from 'date-fns/format';
import BlogFeature from '../BlogFeature/BlogFeature';
import styles from './BlogFeatureListing.module.scss';

export default class BlogFeatureListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover.childImageSharp.resize.src,
        date: format(postEdge.node.frontmatter.date, 'DD.MM.YYYY'),
        title: postEdge.node.frontmatter.title,
        category: postEdge.node.frontmatter.category,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();

    return (
      <div className={styles.wrapper}>
        {postList.map(post =>
                (
                  <BlogFeature
                    key={post.title}
                    date={post.date}
                    cover={post.cover}
                    path={post.path}
                    title={post.title}
                    category={post.category}
                  />
                ))}
      </div>
    );
  }
}
