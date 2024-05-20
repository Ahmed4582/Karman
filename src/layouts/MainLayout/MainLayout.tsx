import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer, AllPages} from "../../components/common";

import styles from "./styles.module.css";
const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div>
        <div className="row ">
          <div className="col-lg-3 ">
           <div className={wrapper}>
             <AllPages/>
           </div>
          </div>
          <div className="col-lg-9">
            <div className={wrapper}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;