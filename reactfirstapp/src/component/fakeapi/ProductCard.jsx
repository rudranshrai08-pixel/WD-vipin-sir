import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './fakeapi/Card'

const Home = () => {

  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => setproducts(data.products))
      .catch(error => alert(error.message))
  }, [])

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        List Of Products
      </h2>

      <div className="row g-4">

        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}

      </div>

    </div>
  )
}

export default Home