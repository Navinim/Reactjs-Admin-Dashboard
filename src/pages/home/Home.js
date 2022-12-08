import React from 'react'
import { Chart } from '../../components/charts/Chart'
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { data } from "../../data"
import WidgetSm from '../../components/widgets/WidgetSm'
import WidgetLg from '../../components/widgets/WidgetLg'

export const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" dataKey="Active User" grid />
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
