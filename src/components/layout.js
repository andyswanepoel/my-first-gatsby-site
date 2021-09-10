import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import * as layoutStyles from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={layoutStyles.container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={layoutStyles.siteTitle}>
        {data.site.siteMetadata.title}
      </header>
      <nav>
        <ul className={layoutStyles.navLinks}>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/" className={layoutStyles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/about" className={layoutStyles.navLinkText}>
              About
            </Link>
          </li>
          <li className={layoutStyles.navLinkItem}>
            <Link to="/blog" className={layoutStyles.navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={layoutStyles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
