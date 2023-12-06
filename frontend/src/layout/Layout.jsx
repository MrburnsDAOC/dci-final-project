import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="text-mainText text-lg font-sans bg-mainBg font-normal leading-6">
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
