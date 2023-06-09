import './index.css';
import { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { optionType, wineDataType, tempObjType, tempValue } from "./types";

// read wine data json
const wineData = require('./Wine-Data.json')

function App() {
  const [scatterOption, setScatterOption] = useState<optionType>({
    xAxis: {},
    yAxis: {},
    series: [
      {
        data: [],
        type: 'scatter'
      }
    ]
  })

  const [chartOption, setChartOption] = useState<optionType>({
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'bar'
      }
    ]
  });

  useEffect(() => {
    let colorIntensity: Number[][] = [];

    let tempObj: tempObjType = {}

    wineData.forEach((element: wineDataType) => {
      colorIntensity.push([element["Color intensity"], element["Hue"]]);

      if (tempObj[element.Alcohol.toString()]) {
        tempObj[element.Alcohol.toString()] = {
          count: tempObj[element.Alcohol.toString()].count + 1,
          sum: tempObj[element.Alcohol.toString()].sum + element["Malic Acid"]
        }
      } else {
        tempObj[element.Alcohol] = {
          count: 1,
          sum: element["Malic Acid"]
        }
      }
    });

    let alcohol: string[] = Object.keys(tempObj);

    let values: tempValue[] = Object.values(tempObj);
    let avgArray: Number[] = values.map(item => item.sum / item.count)

    setChartOption({
      ...chartOption,
      xAxis: {
        type: 'category',
        data: alcohol
      },
      series: [{ type: 'bar', data: avgArray }]
    })

    setScatterOption({
      ...scatterOption,
      series: [{
        scatterOption: 4,
        data: colorIntensity,
        type: 'scatter'
      }]
    })

  }, []);

  return (
      <div className="center">
        <div className="w-50">
          <ReactEcharts option={scatterOption} />
        </div>
        <div className="w-50">
          <ReactEcharts option={chartOption} />
        </div>
      </div>);
}
export default App;