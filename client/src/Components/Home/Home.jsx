import React from "react";
import { useQuery, gql } from "@apollo/client";

// Definir la consulta GraphQL
const GET_SALUDO = gql`
  query GetSaludo {
    getSaludo
  }
`;

const Home = () => {
  // Ejecutar la consulta con useQuery
  const { loading, error, data } = useQuery(GET_SALUDO);

  // Mostrar contenido condicional basado en el estado de la consulta
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <h1>{data.getSaludo}</h1>
    </div>
  );
};

export default Home;
