import { useParams } from "react-router-dom";

export const Home = () => {
  const params = useParams();
  return <h1>BEM VINDO {params.id}</h1>;
};
