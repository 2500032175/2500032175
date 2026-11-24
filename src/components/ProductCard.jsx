function ProductCard({ name, price }) {
  return (
    <article className="product-card">
      <div className="product-badge">Featured</div>
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
    </article>
  );
}

export default ProductCard;
