import { Link, graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Header = () => {
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
    <div>
      <header>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </header>
      <meta name="description" content="Your description" />
      <nav>
        <ul>
          <li>
            <Link to="/chiens">Chiens</Link>
          </li>
          <li>
            <Link to="/chats">Chats</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
