import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
