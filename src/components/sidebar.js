import React from 'react';
import { Link } from 'gatsby';

const isActive = ({ isCurrent }) =>
    isCurrent ? { className: "sidebar-nav-item active" } : null;

const ExactNavLink = props => {
    return <Link getProps={isActive} {...props} />
}

const Sidebar = props => {
    let sidebarClasses = ['sidebar'];

    if (props.show) {
        sidebarClasses = ['sidebar', 'open'];
    }
    return (
        <>
            {props.children}

            {/* Toggleable sidebar */}
            <aside className={sidebarClasses.join(' ')} id="sidebar">
                <header className="sidebar-item">
                    <p>
                    A reserved Gatsby theme, ported from the Jekyll theme of the same name, that places the utmost gravity on content with a hidden drawer. Made by <a href="https://twitter.com/mediasittich">@mediasittich</a>.
                    </p>
                </header>

                <nav className="sidebar-nav">
                    <ExactNavLink to="/" className="sidebar-nav-item">Home</ExactNavLink>
                    <ExactNavLink to="/about" className="sidebar-nav-item">About</ExactNavLink>
                    <a href="http://github.org" className="sidebar-nav-item">GitHub project</a>
                </nav>

                <footer className="sidebar-item">
                    &copy; {new Date().getFullYear()}. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </aside>
        </>
    );
}

export default Sidebar;