import Loading from "../components/feedback/loading/Loading";
import GridList from "../components/common/GridList/GridList";
import Product from "../components/ecommerce/product/Product";
import useWishlist from "../hooks/useWishlist";
import EmptyWishlist from "../components/ecommerce/wishlist/EmptyWishlist";

export default function WishlistPage() {
  const { ProductFullInfo, loading, error } = useWishlist();

  return (
    <div>
      <div className=" px-3 sm:px-5 text-3xl mt-10  md:mt-10 font-extrabold">
        <h2>القائمة المفضلة</h2>
      </div>
      <Loading loading={loading} error={error} types="product">
        {ProductFullInfo.length <= 0 ? (
          <EmptyWishlist />
        ) : (
          <div className=" grid grid-cols-2 px-2 mt-10 md:mt-15 lg:mt-10 sm:px-5 md:grid-cols-3 lg:grid-cols-5 gap-3  ">
            <GridList
              recods={ProductFullInfo}
              gridItemList={(item) => <Product {...item} />}
            />
          </div>
        )}
      </Loading>
    </div>
  );
}
