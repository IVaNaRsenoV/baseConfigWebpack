import React from 'react'

import { Layout } from '@layout/index'
import { RouterContainer } from '@components/templates';
import { Charts } from '@assets/routes';


export const Router = () => {
  return (
    <>
        <Layout />
        <RouterContainer data={Charts}/>
    </>
  )
}
