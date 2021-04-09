import React from 'react'
import Button from '../components/Button'

const PageIndex = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Of course ist needs to be pink</p>
      <div className="buttons">
        <Button type="default">Info Button</Button>
        <Button type="info">Info Button</Button>
        <Button type="warning">Warning Button</Button>
        <Button type="danger">Danger Button</Button>
      </div>
    </div>
  )
}
export default PageIndex