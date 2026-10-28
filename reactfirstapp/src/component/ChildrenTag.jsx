import React from 'react'
import ChildernEx from "./component/ChildrenEx"
const ChildrenTag = () => {
  return (
    <div className='container'>
      <ChildernEx info={"Children Component"}>
        <h4>This is information inside Component as a Tag</h4>
        <h5>This is h5 tag</h5>
      </ChildernEx>
    </div>
  )
}

export default ChildrenTag