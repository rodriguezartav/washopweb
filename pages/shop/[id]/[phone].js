import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, query, useFetch } from "data/Api";

import List from "../List";
import Cart from "../UserCart";
import Product from "../Product";
import UserPay from "../UserPay";

import UserCart from "../UserCart";
import CartCreator from "../CartCreator";

import Layout from "views/Layout";

export default function Home(props) {
  const router = useRouter();

  const { id, phone } = router.query;

  const [mutate, state] = useMutation("cart/update");

  const [openProduct, setOpenProduct] = React.useState(false);
  const [cart, setCart] = React.useState();
  const [shop, setShop] = React.useState({});
  const [product, setProduct] = React.useState();
  const [version, setVersion] = React.useState(0);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [view, setView] = React.useState("CART");
  const [loadShop, shopState] = useMutation("shop/" + id);
  const [loadCart, cartState] = useMutation("cart/phone/" + phone);
  const [loadProduct, productState] = useMutation("product/shop/" + id);

  React.useEffect(() => {
    if (shopState.data) setShop(shopState.data);
  }, [shopState.data]);

  React.useEffect(() => {
    if (cartState.data) setCart(cartState.data);
  }, [cartState.data]);

  React.useEffect(() => {
    if (id) {
      loadShop()
        .then(() => {
          return loadCart();
        })
        .then(() => {
          return loadProduct();
        });
    }
  }, [id]);

  const onSelectItem = (item) => {
    return () => {
      setProduct(item);
      onAddToCart(cart, item);
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
      onAddToCart(cart);
    };
  };

  const onAddToCart = (cart, product) => {
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
            {shop.title || shop.tax_id}
          </h2>
          <p className="text-gray-400 text-xs font-medium ">Pedido Pendiente</p>
        </div>

        <div className="mx-4">
          {view == "CART" && (
            <UserCart
              onPay={() => {
                setView("PAY");
              }}
              isAdmin={isAdmin}
              shop={shop}
              onOpen={() => {
                setCart(null);
              }}
              updateCart={(_cart) => {
                setCart(_cart);
              }}
              onSave={updateCart}
              cart={cart}
            />
          )}
          {view == "PAY" && (
            <UserPay
              isAdmin={isAdmin}
              shop={shop}
              onOpen={() => {
                setCart(null);
              }}
              updateCart={(_cart) => {
                setCart(_cart);
              }}
              onSave={updateCart}
              cart={cart}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
