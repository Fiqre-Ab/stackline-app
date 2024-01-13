// import React from "react";
// import {Line} from "react-chartjs-2";

// const SalesChart =({chartData})=>{
//     //"charData" is the prop passed with the data for the chart
//     const data={
//         labels:chartData.map(d=>d.label),
//         datasets:[
//             {
//                 label:"Sales",
//                 data:chartData.map(d=>d.value),
//                 file:false,
//                 backgroundColor:"rgb(75,192,192)",
//                 borderColor:"rgba(75,192,192,0.2)",
//             },
//         ],
//     };
//     const options={
//         //options for the chart
//         responsive:true,
//         scales:{
//             yAxes:[
//                 {
//                     ticks:{
//                         beginAtZero:true,
//                     }
//                 }
//             ]
//         }

//     }
//     return <Line data={data} options={options}/>
// }

// export default SalesChart;