import React, { FC } from "react";
import { Chart, CategoryScale, LinearScale, Title, BarElement } from 'chart.js';
import { Bar } from "react-chartjs-2";

import { IDataBar } from "interfaces/InterfaceChart";

Chart.register(CategoryScale, LinearScale, BarElement, Title);

export const BarChart:FC<{ data: IDataBar}> = ({ data }) => <Bar data={data} />