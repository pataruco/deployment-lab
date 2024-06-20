import './index.css';

import Footer from '../footer';
import Header from '../header';

const Page = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
