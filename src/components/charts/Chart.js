import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export const Chart = ({title,data,dataKey,grid}) => {
  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Tooltip/>
                {/* <YAxis dataKey="Active User"/> */}
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
                {grid &&<CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                <Legend/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
