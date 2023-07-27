import ProductsRow from './ProductsRow';

function ProductTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <ProductsRow singleProduct={product} />;
          })}
        </tbody>
      </table>

      {/* <ProductsRow/> */}
    </div>
  );
}
export default ProductTable;
