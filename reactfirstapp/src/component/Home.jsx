import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {

  const [users, setUsers] = useState([])
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const getUsers = () => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => alert(error.message))
  }
  useEffect(() => {
    getUsers()
  }, [])
  const insertUser = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        address: address
      })
    })
      .then(() => {
        getUsers()
        setId('')
        setName('')
        setAddress('')
      })
  }
  const updateUser = () => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        name: name,
        address: address
      })
    })
      .then(() => {
        getUsers()
        setId('')
        setName('')
        setAddress('')
      })
  }
  const deleteUser = () => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        getUsers()
        setId('')
        setName('')
        setAddress('')
      })
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        User Information
      </h2>
      <div className="w-50 mx-auto">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter user id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter user address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="text-center">
          <button
            className="btn btn-primary me-2"
            onClick={insertUser}
          >
            Insert
          </button>
          <button
            className="btn btn-success me-2"
            onClick={updateUser}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteUser}
          >
            Delete
          </button>
        </div>

      </div>

      <h2 className="text-center mt-5 mb-3">
        List of Users
      </h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}
export default Home
// import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Card from './fakeapi/Card'

// const Home = () => {

//   const [products, setproducts] = useState([])

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then(response => response.json())
//       .then(data => setproducts(data.products))
//       .catch(error => alert(error.message))
//   }, [])

//   return (
//     <div className="container mt-5">

//       <h2 className="text-center mb-4">
//         List Of Products
//       </h2>

//       <div className="row g-4">

//         {products.map((product) => (
//           <Card key={product.id} product={product} />
//         ))}

//       </div>

//     </div>
//   )
// }

// export default Home
// import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const Home = () => {
//   const [quotes, setQuotes] = useState([])

//   useEffect(() => {
//     fetch("https://dummyjson.com/quotes")
//       .then(response => response.json())
//       .then(data => setQuotes(data.quotes))
//       .catch(error => alert(error.message))
//   }, [])

//   return (
//     <div className="container py-5">

//       <div className="text-center mb-4">
//         <h2 className="fw-bold text-primary">List Of Quotes</h2>
//         <p className="text-muted">Explore some inspirational quotes</p>
//       </div>

//       <div className="card shadow">
//         <div className="card-body">
//           <div className="table-responsive">
//             <table className="table table-bordered table-striped table-hover align-middle mb-0">

//               <thead className="table-dark">
//                 <tr>
//                   <th>ID</th>
//                   <th>Quote</th>
//                   <th>Author</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {quotes.map((row) => (
//                   <tr key={row.id}>
//                     <td>{row.id}</td>
//                     <td>{row.quote}</td>
//                     <td className="fw-semibold">{row.author}</td>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home