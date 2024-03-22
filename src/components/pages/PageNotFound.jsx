import Layout from "../layout/Layout";
import usePageTitle from "../utils/usePageTitle";
const PageNotFound = () => {
  usePageTitle("404 Page Not Found");
  return (
    <Layout>
      <div>PageNotFound</div>
    </Layout>
  );
};

export default PageNotFound;
