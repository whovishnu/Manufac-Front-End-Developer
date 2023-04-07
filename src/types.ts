//define axis type for option type
export type axisType = {
    type?: string,
    data?: string[] | Number[]
  }
  
//define series type for option type
export type seriesType = {
    data?: Number[] | Number[][],
    type?: string
    scatterOption?: Number
}
  
//define option type for echarts options 
export type optionType = {
    xAxis?: axisType,
    yAxis?: axisType,
    series?: [seriesType]
}
