import Footer from "../components/Footer";
import Navbar from "../components/navigation/Navbar";
import ScrollToTop from "../components/navigation/ScrollToTop";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="text-mainText text-lg xl:text-xl  font-sans bg-thirdBg font-normal leading-6 min-h-screen flex flex-col md:bg-thirdBg">
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
