import { DataSetType } from "interfaces/InterfaceChart";


export const UserData: DataSetType = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 74
    },
    {
        id: 2,
        year: 2017,
        userGain: 90000,
        userLost: 15
    },
    {
        id: 3,
        year: 2019,
        userGain: 100000,
        userLost: 90
    },
    {
        id: 4,
        year: 2020,
        userGain: 180000,
        userLost: 145
    },
    {
        id: 5,
        year: 2021,
        userGain: 190000,
        userLost: 80
    },
    {
        id: 6,
        year: 2025,
        userGain: 100000,
        userLost: 100
    },
];
 
export const dataChart = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }