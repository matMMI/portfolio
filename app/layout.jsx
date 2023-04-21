import Footer from "../components/footer";
import Image from "next/image";

function Layout(props) {
  return (
    <>
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <div className="me">
            <h1>
              <span className="txt t1">
                – MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WEB DEVELOPER &
                UX/UI DESIGNER{" "}
              </span>
              <span className="txt t2">
                – MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WEB DEVELOPER &
                UX/UI DESIGNER{" "}
              </span>
            </h1>
          </div>
          <div className="btnFilter">
            <Image
              src="/images/filter.svg"
              alt="close"
              width={30}
              height={30}
            />
          </div>
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Layout;
