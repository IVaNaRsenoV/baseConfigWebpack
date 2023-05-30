import React from 'react'
import { Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <ul>
        <Link to="/about">About</Link>
        <Link to="/info">Info</Link>
        <Link to="/help">Help</Link>
    </ul>
  )
}
