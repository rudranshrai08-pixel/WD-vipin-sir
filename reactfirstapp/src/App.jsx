import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CounterP from "./component/CounterP"
import Contact from "./component/Contact"
import Courses from "./component/Courses"
import About from "./component/About"
import Offline from "./component/Offline"
import Online from "./component/Online"
import Error404 from "./component/Error404"
import Product from "./component/Product"
import Login from "./component/Login"
import Dashboard from "./component/Dashboard"

const App = () => {

  return (
    <div className="container">

      <Routes>

        {/* First page - Login */}
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/courses" element={<Courses />}>
          <Route index element={<Offline />} />
          <Route path="offline" element={<Offline />} />
          <Route path="online" element={<Online />} />
        </Route>

        <Route path="/counter" element={<CounterP />} />

        <Route path="/product" element={<Product />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/about"
          element={<About info="This is props by routes" />}
        />

        <Route path="*" element={<Error404 />} />

      </Routes>

    </div>
  )
}

export default App