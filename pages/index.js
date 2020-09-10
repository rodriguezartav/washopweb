import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, query, useFetch } from "data/Api";

import Layout from "views/Layout";

export default function Home(props) {
  const router = useRouter();

  return (
    <Layout>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="mt-3 mx-3">
          <h2 className="text-gray-500 text-lg font-medium uppercase tracking-wide">
            Hola
          </h2>
          <p className="text-gray-400 text-xs font-medium ">Pedido Pendiente</p>
        </div>
      </div>
    </Layout>
  );
}
