import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

// interface Props {
//   activePlan: Number;
//   pendingPlan: Number;
//   completedPlan: Number;
// }
import classes from './doughbutChart.module.css'
import { doughnutChartProps } from "../../utils/types/Types";

const DoughnutChart = ({ chartData,title}: doughnutChartProps) => {
  // const data = {
  //     labels: ['Label 1', 'Label 2', 'Label 3'],
  //     datasets: [
  //       {
  //         data: [30, 50, 20],
  //         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //       },
  //     ],
  //   };
  // const zz = [2,34,5,6,7]
  const dataValues = chartData.map(data => data.data)
  
  // values.forEach(val => console.log(typeof(val)))
  // values.forEach(val => console.log('holla',val));
  const total = dataValues.reduce((acc,current)=>acc+ current, 0)
  // const total = values[0]
  // const total = 4
  // console.log('hola',total);
  const innerLabel = {
    id: "innerLabel",
    beforeDatasetDraw(chart: any, args: any, pluginOptions: any) {
      const { ctx, data } = chart;
      // const meta = args.meta;
      // const xCoor = meta.data[0].x
      // const yCoor = meta.data[0].y
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.textAlign = "center";
      ctx.font = "14px sans-serif";
      ctx.fillStyle = "#90949E";
      ctx.textBaseline = "middle";
      ctx.fillText(title, xCoor, yCoor - 15);

      ctx.font = "bolder 25px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText(0, xCoor, yCoor + 20);

      // ctx.restore();
    },
  };
  const data = {
    labels: chartData.map(data => data.dataTitle),
    datasets: [
      {
        label: "Total Thrift Plans",
        data: dataValues,
        backgroundColor: chartData.map(data => data.dataColor),
        // hoverOffset: 4,
        borderWidth: 0,
        spacing: 10,
        borderRadius: 10,
        radius: 100,
        
      },
    ],
  };

  const options = {
    // You can customize additional options here
    cutout: "70%",
    responsive: true,
    // maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        // position: "right",
        // responsive: true,
        // labels: {
        //   boxWidth: 10,
        //   boxHeight: 10,
        //   padding: 10,
        //   font: {
        //     size: 14,
        //   },
        // },
      },
    },
  };

  return (
    <div className={classes.container}
    >
      <div>
        <p className={classes.title}>{title}</p>
        <p className={classes.total}>{total}</p>
      </div>
      <div>
      <Doughnut data={data} options={options}  />
      </div>
    </div>
  );
};
// plugins={[innerLabel]}
export default DoughnutChart;
