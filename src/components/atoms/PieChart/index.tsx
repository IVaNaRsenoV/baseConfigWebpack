import React, { FC } from 'react'
import { Chart, CategoryScale, LinearScale, Title, LineElement, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2'

import { IDataBar } from "@interfaces/InterfaceChart";

Chart.register(CategoryScale, LinearScale, LineElement, ArcElement, Title);

export const PieChart: FC<{ data: IDataBar}> = ({ data }) => <Pie data={data} />;
