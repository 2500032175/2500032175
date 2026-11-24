import ProductCard from './components/ProductCard.jsx';
import './App.css';

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Product Catalog</h1>
        <p>Passing product name and price from App (parent) to ProductCard (child) via props</p>
      </header>

      <section className="product-grid" aria-label="Product list">
        <ProductCard name="Wireless Headphones" price={79.99} />
        <ProductCard name="Mechanical Keyboard" price={129.5} />
        <ProductCard name="Smart Watch" price={199.0} />
        <ProductCard name="USB-C Hub" price={45.25} />
      </section>
    </main>
  );
}

export default App;
