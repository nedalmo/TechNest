import { RouterProvider, createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const TechCare = lazy(() => import("../pages/TechCare"));
const CartPage = lazy(() => import("../pages/CartPage"));
const CustomProduct = lazy(() => import("../pages/CustomProduct"));
const WishlistPage = lazy(() => import("../pages/WishlistPage"));
const Regester = lazy(() => import("../pages/Regester"));
import { Lottie } from "lottie-react";
import animationData from "../assets/loading.json";
import Error from "../pages/Error";

import { lazy, Suspense } from "react";
import PageLoader from "../components/feedback/PageLoaderFile/PageLoader ";
import Account from "../pages/Account";
import Protected from "../components/auth/Protected";
import Checkout from "../components/ecommerce/home/Checkout";
import DetailsProduct from "../pages/DetailsProduct";
import CheckoutProtected from "../components/auth/CheckoutProtected";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <Lottie src={animationData} autoplay loop className="w-64 h-64" />
          </div>
        }
      >
        {" "}
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            {" "}
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/categoris/:namecategotye",
        element: (
          <Suspense fallback={<PageLoader />}>
            {" "}
            <CustomProduct />
          </Suspense>
        ),
        loader: (params) => {
          if (
            typeof params.params.namecategotye !== "string" ||
            !/^[a-z]+(?:[-_][a-z]+)*$/i.test(params.params.namecategotye)
          ) {
            throw new Response("Not Found", {
              statusText: "category not found",
              status: 400,
            });
          }
        },
      },
      {
        path: "/Regester",
        element: (
          <Suspense fallback={<PageLoader />}>
            {" "}
            <Regester />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Protected>
            <CheckoutProtected>
              <Suspense fallback={<PageLoader />}>
                {" "}
                <Checkout />
              </Suspense>
            </CheckoutProtected>
          </Protected>
        ),
      },

      {
        path: "/DetatailsProduct/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            {" "}
            <DetailsProduct />
          </Suspense>
        ),
      },
      {
        path: "/lgoin",
        element: (
          <Suspense fallback={<PageLoader />}>
            {" "}
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/tech-care",
        element: (
          <Suspense fallback={<PageLoader />}>
            {" "}
            <TechCare />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<PageLoader />}>
            {" "}
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/account",
        element: (
          <Protected>
            <Suspense fallback={<PageLoader />}>
              {" "}
              <Account />
            </Suspense>
          </Protected>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Protected>
            <Suspense fallback={<PageLoader />}>
              {" "}
              <WishlistPage />
            </Suspense>
          </Protected>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={Routes}></RouterProvider>;
}
