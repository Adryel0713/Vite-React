const ProductInfo = () => {
    let product = {
        name: "Laptop",
        price: 1200,
        availability: "In stock"
    }
  return (
    <div>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Product: {product.availability}</p>
    </div>
  )
}

export default ProductInfo