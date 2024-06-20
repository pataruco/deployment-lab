import './index.css';

import Header from '../Header';
import Footer from '../footer';

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
