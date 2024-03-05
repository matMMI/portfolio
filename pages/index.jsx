import axios from "axios";
import Layout from "../app/layout";
import Filter from "../components/filter";
import { useEffect, useRef } from "react";
import Atropos from "atropos/react";
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
      <Filter pages={pages} onFilterClick={handleFilterClick} />
      <div className="item-detail text-center" ref={gridRef}>
        {pages.map((page) =>
          page.acf.bloc_image.map((blocImage) => (
            <div
              className={`item ${blocImage.filtre} atropos my-atropos`}
              key={blocImage.image}
              onClick={() => {}}
            >
              <Atropos className="my-atropos">
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
              </Atropos>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
