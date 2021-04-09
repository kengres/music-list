import React from 'react'
import "./Loading.css"
import ReactDelayRender from "react-delay-render"

const Loading = () => {
  return (
    <div className="loader">
      <span className="content">Loading...</span>
    </div>
  )
}

export default ReactDelayRender({ delay: 300 })(Loading)
