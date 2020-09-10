import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, query, useFetch } from "data/Api";

import List from "../List";
import Cart from "../Cart";
import Product from "../Product";
import CartSelector from "../CartSelector";
import CartCreator from "../CartCreator";

import Layout from "views/Layout";

export async function getStaticPaths() {
  let response = await query("shop");

  let shops = response.data;
  return {
    paths: shops.map((shop) => {
      return { params: { id: shop.id + "" } };
    }),
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts

  let shop = await query("shop/" + params.id);
  let products = await query("product/shop/" + params.id);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      shop: shop.data,
      products: products.data,
    },
  };
}

export default function Home(props) {
  const router = useRouter();

  const { token } = router.query;

  const [mutate, state] = useMutation("cart/update");

  const [openProduct, setOpenProduct] = React.useState(false);
  const [cart, setCart] = React.useState();
  const [product, setProduct] = React.useState();
  const [version, setVersion] = React.useState(0);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [response] = useFetch("shop/token/" + token);

  React.useEffect(() => {
    if (response) setIsAdmin(true);
  }, [response]);

  const onSelectItem = (item) => {
    return () => {
      setProduct(item);
    };
  };

  const onOpenProduct = () => {
    setOpenProduct(!openProduct);
  };

  const onCreate = () => {
    setOpenProduct(true);
  };

  const onSelectCart = (cart) => {
    return () => {
      const checkItems = cart.lines.items.filter(
        (item) => item.product_id == product.id
      );
      if (checkItems.length == 0)
        cart.lines.items.push({
          name: product.name,
          product_id: product.id,
          price: product.price,
          amount: 1,
          image: product.image,
        });

      setProduct(null);
      setCart(cart);
    };
  };

  const productUpdated = () => {
    setVersion(version + 1);
    setOpenProduct(false);
  };

  const updateCart = async (_cart) => {
    await mutate({ ...cart });
    setCart(null);
  };

  return (
    <Layout>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="mt-3 mx-3">
          <h2 className="text-gray-500 text-lg font-medium uppercase tracking-wide">
            {props.shop.title || props.shop.tax_id}
          </h2>
          <p className="text-gray-400 text-xs font-medium ">
            Lista de Productos
          </p>
        </div>

        <div className="mx-4">
          <List
            isAdmin={isAdmin}
            products={props.products}
            shop={props.shop}
            onSelect={onSelectItem}
            onCreate={onCreate}
            onOpen={onOpenProduct}
            version={version}
          ></List>
          <Product
            isAdmin={isAdmin}
            shop={props.shop}
            onProductUpdated={productUpdated}
            onOpen={onOpenProduct}
            open={openProduct}
          />
          <Cart
            isAdmin={isAdmin}
            shop={props.shop}
            onOpen={() => {
              setCart(null);
            }}
            updateCart={(_cart) => {
              setCart(_cart);
            }}
            onSave={updateCart}
            cart={cart}
          />
          <CartSelector
            shop={props.shop}
            onOpen={() => {
              setProduct(null);
            }}
            product={isAdmin && product}
            onSelectCart={onSelectCart}
          />
          <CartCreator
            shop={props.shop}
            onOpen={() => {
              setProduct(null);
            }}
            product={!isAdmin && product}
            onSelectCart={onSelectCart}
          />
        </div>
      </div>
    </Layout>
  );
}
