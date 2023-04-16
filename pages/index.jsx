import axios from "axios";
import Layout from "../app/layout";
const HomePage = ({ pages }) => {
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
                >
                  <img src={flt.image} alt={flt.filtre} />
                </li>
              ))
            )}
            <li className="close">
              <svg
                width="50"
                height="50"
                viewBox="0 0 257 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.0618286"
                  width="256"
                  height="256"
                  rx="60"
                  fill="black"
                />
                <rect
                  x="92.7098"
                  y="89.3166"
                  width="107.021"
                  height="7.03"
                  transform="rotate(45 92.7098 89.3166)"
                  fill="white"
                />
                <rect
                  x="87.7388"
                  y="164.992"
                  width="107.021"
                  height="7.03"
                  transform="rotate(-45 87.7388 164.992)"
                  fill="white"
                />
              </svg>
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
                  <div>
                    <h2> {blocImage.titre}</h2>
                    <p> {blocImage.dropdown}</p>
                  </div>
                  <div className="link">
                    <a href={blocImage.lien} target="_blank">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.85107 3.30249V5.30249H2.85107V16.3025H13.8511V11.3025H15.8511V17.3025C15.8511 17.5677 15.7457 17.8221 15.5582 18.0096C15.3706 18.1971 15.1163 18.3025 14.8511 18.3025H1.85107C1.58586 18.3025 1.3315 18.1971 1.14397 18.0096C0.956431 17.8221 0.851074 17.5677 0.851074 17.3025V4.30249C0.851074 4.03727 0.956431 3.78292 1.14397 3.59538C1.3315 3.40785 1.58586 3.30249 1.85107 3.30249H7.85107ZM18.8511 0.30249V8.30249H16.8511V3.71549L9.05807 11.5095L7.64407 10.0955L15.4361 2.30249H10.8511V0.30249H18.8511Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
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
