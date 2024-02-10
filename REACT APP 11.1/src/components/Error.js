import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err=useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Something went wrong</h1>
      <h3>{err.statusText}</h3>
      <h4>{err.error.message}</h4>
    </div>
  )
}

export default Error
