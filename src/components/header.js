import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Header1 = ({ data }) => (
    <header className="masthead">
        <div className="container">
            <h3 className="masthead-title">
                <Link to="/">{data.site.siteMetadata.title}</Link>
                <small>{data.site.siteMetadata.tagline}</small>
            </h3>
        </div>
    </header>
)

const Header2 = props => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        tagline
                    }
                }
            }
        `
        }
        render={data => <Header1 data={data} {...props} />}
    />   
)

export default Header2;