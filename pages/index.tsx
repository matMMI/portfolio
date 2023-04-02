import { NextPage } from "next";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { ReactNode } from "react";
import Layout from "../app/layout";

type Page = {
  acf: {
    bloc_image: {
      image: string;
      titre: string;
    }[];
  };
};

type HomePageProps = {
  pages: Page[];
};

const HomePage: NextPage<HomePageProps> = ({ pages }) => {
  return (
    <Layout>
      {pages.map((page) =>
        page.acf.bloc_image.map((blocImage) => (
          <Card key={blocImage.image} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, width: 400 }}
              image={blocImage.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blocImage.titre}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    "https://mathistogni.fr/wp-json/acf/v3/pages"
  );
  const data = await response.data;
  return {
    props: {
      pages: data,
    },
  };
}

export default HomePage;
