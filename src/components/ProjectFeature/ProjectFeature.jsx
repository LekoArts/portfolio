import React from "react";
import Link from "gatsby-link";
import { Fade } from "react-reveal";
import styles from "./ProjectFeature.module.scss";

export default class ProjectFeature extends React.Component {
    render() {
        const bgImage = {
            backgroundImage: `url("${this.props.cover}")`
        }
        return (
            <article className={styles.wrapper} style={bgImage}>
                <Link to={this.props.path} className={styles.link}>
                    <Fade down>
                    <div className={styles.customer}>
                        {this.props.customer}
                    </div>
                    </Fade>
                    <Fade down>
                    <h2 className={styles.title}>
                        {this.props.title}
                    </h2>
                    </Fade>
                </Link>
                <div className={styles.imageOverlay} />
            </article>
        );
    }
}