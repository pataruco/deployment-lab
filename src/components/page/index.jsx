import './index.css';

import Footer from '../footer';
import Header from '../header';

const Page = ({ children, className = '' }) => {
  return (
    <div className={`page ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
