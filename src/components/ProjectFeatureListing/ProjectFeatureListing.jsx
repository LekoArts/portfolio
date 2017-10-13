import React from "react";
import ProjectFeature from "../ProjectFeature/ProjectFeature";
import styles from "./ProjectFeatureListing.module.scss";

export default class ProjectFeatureListing extends React.Component {
    getProjectList() {
        const projectList = [];
        this.props.projectEdges.forEach(projectEdge => {
          projectList.push({
            path: projectEdge.node.fields.slug,
            cover: projectEdge.node.frontmatter.cover.childImageSharp.resize.src,
            customer: projectEdge.node.frontmatter.customer,
            title: projectEdge.node.frontmatter.title
          });
        });
        return projectList;
      }
    render() {
        const projectList = this.getProjectList();

        return (
        <div className={styles.wrapper}>
            {projectList.map(project => 
                (
                    <ProjectFeature key={project.title} customer={project.customer} cover={project.cover} path={project.path} title={project.title} />
                )
            )}
        </div>
        )
  }
}