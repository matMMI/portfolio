import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
