import React from "react";
import Link from "gatsby-link";
import { Fade } from "react-reveal";
import Img from "gatsby-image";
import styles from "./ProjectFeature.module.scss";

export default class ProjectFeature extends React.Component {
    render() {
        return (
            <article className={styles.wrapper}>
                <div className={styles.image}>
                    <Img sizes={this.props.cover} />
                </div>
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