import Product from "../components/ecommerce/product/Product";
import Loading from "../components/feedback/loading/Loading";
import GridList from "../components/common/GridList/GridList";
import useProducts from "../hooks/useProducts";
export default function Products() {
  const { ProductFullInfo, error, loading } = useProducts();

  return (
    <Loading loading={loading} error={error} types="product">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
        <GridList
          recods={ProductFullInfo}
          gridItemList={(item) => <Product {...item} />}
        />
      </div>
    </Loading>
  );
}
