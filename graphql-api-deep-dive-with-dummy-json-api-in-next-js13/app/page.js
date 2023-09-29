

const fetchProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const products = await res.json();
  console.log("Products", products);
  return products
}

const Page = async () => {

  const products = await fetchProducts();

  return (
    <>
      <h1>Products</h1>

      {products.map((item) => {
        return (
          <>
            {item.title}
          </>
        )
      })}
    </>
  )
}

export default Page