import axios from "axios";
import Layout from "../app/layout";
import Image from "next/image";
import Script from "next/script";
const HomePage = ({ pages }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="item-menu filter">
          <ul>
            {pages.map((page) =>
              page.acf.filtre.map((flt) => (
                <li
                  className="icon"
                  data-filter={`.${flt.filtre}`}
                  key={flt.image}
                  onClick={scrollToTop}
                >
                  <Image
                    width={100}
                    height={100}
                    src={flt.image}
                    alt={flt.filtre}
                  />
                </li>
              ))
            )}
            <li className="close">
              <Image
                src="/images/close.svg"
                alt="close"
                width={100}
                height={100}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="item-detail text-center">
        {pages.map((page) =>
          page.acf.bloc_image.map((blocImage) => (
            <div
              className={`item ${blocImage.filtre}`}
              key={blocImage.image}
              onClick={() => {}}
            >
              <div target="_blank" className="square">
                <div className="content">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${blocImage.image})` }}
                  />
                </div>
                <div className="text">
                  <div className="title_item">
                    <h2> {blocImage.titre}</h2>
                    <p> {blocImage.dropdown}</p>
                  </div>
                  <a className="link" href={blocImage.lien} target="_blank">
                    VOIR
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Script src="/js/jqueryLatest.js" />
      <Script src="/js/isotope.js" />
      <Script src="/js/imageLoaded.js" />
      <Script src="/js/main.js" />
    </Layout>
  );
};
export async function getServerSideProps() {
  const response = await axios.get(
    "https://apiportfolio.mathistogni.fr/wp-json/acf/v3/pages"
  );
  const data = await response.data;
  return {
    props: {
      pages: data,
    },
  };
}
export default HomePage;
