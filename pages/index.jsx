import axios from "axios";
import Layout from "../app/layout";
import Image from "next/image";
import { useEffect, useRef } from "react";
const HomePage = ({ pages }) => {
  const gridRef = useRef();
  const isotopeInstanceRef = useRef();
  useEffect(() => {
    if (typeof window === "undefined") return;
    let Isotope;
    import("isotope-layout").then((IsotopeModule) => {
      Isotope = IsotopeModule.default;
      import("imagesloaded").then((imagesLoaded) => {
        imagesLoaded.default(gridRef.current, () => {
          isotopeInstanceRef.current = new Isotope(gridRef.current, {
            itemSelector: ".item",
            layoutMode: "masonry",
          });
        });
      });
    });
    const btnFilter = document.querySelector(".btnFilter");
    const filter = document.querySelector(".filter");
    if (btnFilter) {
      btnFilter.addEventListener("click", () => {
        const isActive = filter.classList.toggle("active");
        handleFilterClick(isActive ? "*" : "");
      });
    }
    return () => {
      isotopeInstanceRef.current?.destroy();
    };
  }, []);
  const handleFilterClick = (filterValue) => {
    const filterClass = "active";
    const filterContainer = document.querySelector(".item-menu.filter");
    if (filterContainer.classList.contains(filterClass)) {
      isotopeInstanceRef.current?.arrange({ filter: filterValue });
    } else {
      isotopeInstanceRef.current?.arrange({ filter: "*" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="parentFilter">
        <div className="item-menu filter">
          <ul>
            {pages.map((page) =>
              page.acf.filtre.map((flt) => (
                <li
                  className="icon"
                  data-filter={`.${flt.filtre}`}
                  key={flt.image}
                  onClick={() => {
                    handleFilterClick(`.${flt.filtre}`);
                    const filter = document.querySelector(".item-menu.filter");
                    filter.classList.remove("active");
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={flt.image}
                    alt={flt.filtre}
                    priority
                  />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="item-detail text-center" ref={gridRef}>
        {pages.map((page) =>
          page.acf.bloc_image.map((blocImage) => (
            <div
              className={`item ${blocImage.filtre}`}
              key={blocImage.image}
              onClick={() => {}}
            >
              <div className="square">
                <div className="content">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${blocImage.image})` }}
                  />
                </div>
                <div className="text">
                  <div className="title_item">
                    <h2>{blocImage.titre}</h2>
                    <p>{blocImage.dropdown}</p>
                  </div>
                  <a
                    className="link"
                    href={blocImage.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VOIR PLUS
                  </a>
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
