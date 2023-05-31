import React from "react";
import { BarChart, LineChart, PieChart } from "@components/atoms";
import { dataChart } from "./data";


interface ICharts {
    id: number;
    path: string;
    linkName: string;
    element: React.ReactElement;
}
  
  // WE CAN WRITE ROUTES IN THE ARRAY DATA
  
export const Charts: ICharts[] = [
  {
    id: 4,
    path: "/",
    linkName: "Main page",
    element: <h1>Main Page</h1>
  },
  {
    id: 5,
    path: "/about",
    linkName: "About page",
    element: <h1>About Page</h1>
  },
  {
    id: 1,
    path: "chart_bar",
    linkName: "Chart Bar",
    element: <BarChart data={dataChart}/>,
  },
  {
    id: 2,
    path: "chart_line",
    linkName: "Chart Line",
    element: <LineChart data={dataChart}/>,
  },
  {
    id: 3,
    path: "chart_pie",
    linkName: "Chart Pie",
    element: <PieChart data={dataChart}/>,
  },
]