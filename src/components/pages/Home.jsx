import { useSelector } from "react-redux";
import Layout from "../layout/Layout";
import usePageTitle from "../utils/usePageTitle";
import { useEffect, useState } from "react";
const Home = () => {
  usePageTitle("Home");
  const [auth, setAuth] = useState(useSelector((state) => state.auth));

  // displaying data on first render
  useEffect(() => {
    const data = window.localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, [auth]);

  return (
    <>
      <Layout>
        <h1>Home</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </Layout>
    </>
  );
};

export default Home;
