export interface IChartData {
    labels : string[],
    datasets: [
        {
            data: number[],
            backgroundColor: number[] | string[],
            hoverBackgroundColor: number[] | string[],
        }
    ]
}

export interface IChartOptions {
    cutout: string;
}