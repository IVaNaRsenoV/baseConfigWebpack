import React, { FC } from "react";
import { Chart, CategoryScale, LinearScale, Title, LineElement, PointElement } from 'chart.js';
import { Line } from "react-chartjs-2";

import { IDataBar } from "interfaces/InterfaceChart";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title);

export const LineChart:FC<{ data: IDataBar}> = ({ data }) => <Line data={data} />;