import React, { FC } from 'react'
import { Routes, Route } from 'react-router';
import { ChartContainer } from '@components/templates';

interface IRouter {
  id: number;
  path: string;
  element: React.ReactElement;
}

interface IData {
  data: IRouter[];
}

export const RouterContainer:FC<IData> = ({ data }) => {
  return (
    <Routes>
    {
      data.map(({ id, element, path }: IRouter) => {
        return <Route
                  key={id}
                  path={path}
                  element={
                    <ChartContainer>
                      {element}
                    </ChartContainer>
                  } />
      })
    }
    </Routes>
  )
}
