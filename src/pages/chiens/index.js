import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

const PageChien = () => {
  return (
    <Layout title="Page Chien">
      <div>
        <h1>Page Chien</h1>
        <p>je suis la pages des chiensss </p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="les chiens" />;

export default PageChien;
