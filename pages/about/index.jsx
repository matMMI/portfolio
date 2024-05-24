import React from "react";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { WavyBackgroundDemo } from "../../components/wavybackground";
const Mdr = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <WavyBackgroundDemo title="À PROPOS" />
        <Link href="/">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Accueil
          </button>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequatur dolorum earum. Dolorum rerum fuga repudiandae molestias
          quo sunt maxime veritatis, sint sed. Officia, dolorem voluptas ipsum
          quidem magnam fuga.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Mdr;
