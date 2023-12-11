import Footer from "../components/Footer";
import Navbar from "../components/navigation/Navbar";
import ScrollToTop from "../components/navigation/ScrollToTop";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="text-mainText text-lg font-sans bg-secondBg font-normal leading-6 min-h-screen flex flex-col ">
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
