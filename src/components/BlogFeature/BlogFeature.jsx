import React from "react";
import Link from "gatsby-link";
import styles from "./BlogFeature.module.scss";

export default class BlogFeature extends React.Component {
    render() {
        const bgImage = {
            backgroundImage: `url("${this.props.cover}")`
        }
        return (
            <article className={styles.wrapper} style={bgImage}>
                <Link to={this.props.path} className={styles.link}>
                    <div className={styles.information}>
                        <span className={styles.category}>{this.props.category}</span>
                        <div className={styles.date}>
                            {this.props.date}
                        </div>
                    </div>
                    <h2 className={styles.title}>
                        {this.props.title}
                    </h2>
                </Link>
                <div className={styles.imageOverlay} />
            </article>
        );
    }
}