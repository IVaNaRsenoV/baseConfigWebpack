import React from 'react'
import { Routes, Route } from 'react-router';
import { useAppDispatch, useAppSelector } from "@reduxHooks/index";
import { count } from "@reducers/getInfoSlice";
import { About, Help, Info } from '@components/atoms';
import { Layout } from '@layout/index'

export const App = () => {

  const info = useAppSelector((state) => state.getInfo.information);
  const dispatch = useAppDispatch();

  console.log(info);

  return (
    <div>
       <button onClick={() => dispatch(count())}>count</button>
        <Layout />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/help" element={<Help />} />
        </Routes>
    </div>
  )
}
