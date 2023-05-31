import React from 'react'
import { Charts } from '@assets/routes';
import { Link } from 'react-router-dom';

export const Links = () => {
  return (
    <>
      {
        Charts.map(el => {
          return <Link key={el.id} to={el.path}>{el.linkName}</Link>
        })
      }
    </>
  )
}