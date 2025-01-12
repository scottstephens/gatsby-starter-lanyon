import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    const site = data.site.siteMetadata

    return (
        <Layout>
            <Seo title={`${post.frontmatter.title} | ${site.title}`} />
            <article className="post">
                <h1 className="post-title">{post.frontmatter.title}</h1>
                <span className="post-date">{post.frontmatter.date}</span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
            }
        }
    }
`

export default BlogPost;