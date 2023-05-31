interface IData {
    id: number;
    year: number;
    userGain: number;
    userLost: number;
}

export type DataSetType = IData[];

export interface IDatasets {
    data: number[],
    backgroundColor: string[],
    borderColor: string;
    borderWidth: number;
}

export interface IDataBar {
    labels: number[],
    datasets: IDatasets[]
}