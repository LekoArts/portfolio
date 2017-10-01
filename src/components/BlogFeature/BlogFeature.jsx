import React from "react";
import Link from "gatsby-link";
import styles from "./BlogFeature.module.scss";

export default class BlogFeature extends React.Component {
    render() {
        const bgImage = {
            backgroundImage: `url("${this.props.cover}")`
        }
        const overlayColor = {
            backgroundColor: this.props.color
        }
        return (
            <article className={styles.wrapper} style={bgImage}>
                <Link to={this.props.path} className={styles.link}>
                    <div className={styles.customer}>
                        {this.props.customer}
                    </div>
                    <h2 className={styles.title}>
                        {this.props.title}
                    </h2>
                </Link>
                <div className={styles.imageOverlay} style={overlayColor} />
            </article>
        );
    }
}