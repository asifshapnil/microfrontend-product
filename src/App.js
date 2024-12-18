import React, { useEffect, useState } from 'react'; 
import { useStore } from 'HomeApp/store'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const { state } = useStore(); 
  const [products, setProducts] = useState([]);

  // Fetch products from state and set to local state
  useEffect(() => {
    if (state?.products) {
      setProducts(state.products);
    }
  }, [state?.products]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <h2 className="text-start mb-4">Products</h2>
        <table className="table table-bordered table-hover">
          <thead className="">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
