import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

const PageChat = ({ title }) => {
  return (
    <Layout pageTitle="Page Chat">
      <div>
        <p>je suis la pages des chats</p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="les chats" />;

export default PageChat;
