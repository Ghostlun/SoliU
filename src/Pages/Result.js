import React from 'react';
import Footer from '../components/Footer';
import Test from '../components/Self_Test'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


const data = [{name: 'Anixiety', uv: 400, pv: 2400, amt: 2400}
                ];




const Result = () => {





    return <div>

        this page is result page


        <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name"  />
    <YAxis />
    <Bar dataKey="uv" fill="#8884d8"
    />
  </BarChart>
        <Footer/>


    </div>
}

export default Result