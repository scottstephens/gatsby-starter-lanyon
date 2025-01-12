import React from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';
import Seo from '../components/seo';

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url} className="pagination-item">{props.text}</Link>
    } else {
        return <span className="pagination-item">{props.text}</span>
    }
}

const IndexPage = ({ data, pageContext }) => {
    const { group, index, first, last } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    const site = data.site.siteMetadata
    
    return (
        <Layout>
            <Seo title={`${site.title} | ${site.tagline}`} />
            <div className="posts">
                {group.map(({ node }) => (
                    <div key={node.id} className="post">
                        <h1 className="post-title">
                            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </h1>

                        <span className="post-date">{node.frontmatter.date}</span>

                        <div dangerouslySetInnerHTML={{ __html: node.html }}/>
                    </div>
                ))}
            </div>
            

            <div className="pagination">
                <NavLink test={last} url={nextUrl} text="Older" />
                <NavLink test={first} url={previousUrl} text="Newer" />
            </div>
            
        </Layout>
    );
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                tagline
            }
        }
    }
`