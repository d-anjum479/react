import Layout from "../layout/Layout";
import usePageTitle from "../utils/usePageTitle";

const About = () => {
  usePageTitle("About");
  return (
    <Layout>
      <div>About</div>
    </Layout>
  );
};

export default About;
