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

export type wineDataType = {
    "Alcohol": number,
    "Malic Acid": number,
    "Ash": number,
    "Alcalinity of ash": number,
    "Magnesium": number,
    "Total phenols": number,
    "Flavanoids": number,
    "Nonflavanoid phenols": number,
    "Proanthocyanins": String | number,
    "Color intensity": number,
    "Hue": number,
    "OD280/OD315 of diluted wines": number,
    "Unknown": number
}

export type tempValue = {
    count: number
    sum : number
}

export type tempObjType = {
    [key: string]: tempValue
}