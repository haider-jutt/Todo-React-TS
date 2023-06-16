import { FC } from "react";
import Header from '../Components/Common/Header';
import Footer from "../Components/Common/Footer";

interface Ichild {
  children?: any;
}

const Layout: FC<Ichild> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout;