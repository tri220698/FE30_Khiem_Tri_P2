import React, { useState, useEffect } from 'react'
import CanvasJSReact from '../../../assets/canvasjs.react'
import { optionsCate, dashboard_chart } from '../../../database/datatext'

const Category = (props) => {

  const { tit, items } = props
  let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [Data, setData] = useState([])

  useEffect(() => {
    let drill = 0
    let hammer = 0
    let saw = 0
    for (let item of items) {
      if (item.category === dashboard_chart.cate[1].text) {
        dashboard_chart.cate[1].num += 1
      }
      else if (item.category === dashboard_chart.cate[2].text) {
        dashboard_chart.cate[2].num += 1
      }
      else dashboard_chart.cate[3].num += 1

    }
    setData([
      { y: dashboard_chart.cate[1].num, label: dashboard_chart.cate[1].text },
      { y: dashboard_chart.cate[2].num, label: dashboard_chart.cate[2].text },
      { y: dashboard_chart.cate[3].num, label: dashboard_chart.cate[3].text }
    ])
  }, [])

  return (
    <React.Fragment>
      <div className="chart">
        <div>
          <CanvasJSChart options={optionsCate(tit, Data)}
          />
        </div>
      </div>
    </React.Fragment>
  )

}

export default Category