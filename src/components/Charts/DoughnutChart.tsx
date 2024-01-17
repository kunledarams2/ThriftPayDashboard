import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  activePlan: Number;
  pendingPlan: Number;
  completedPlan: Number;
}

const DoughnutChart = ({ activePlan, pendingPlan, completedPlan }: Props) => {
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
      ctx.fillText("Total Thrift Plans", xCoor, yCoor - 15);

      ctx.font = "bolder 25px sans-serif";
      ctx.fillStyle = "black";
      ctx.fillText("2", xCoor, yCoor + 20);

      // ctx.restore();
    },
  };
  const data = {
    labels: ["Active", "Pending", "Completed"],
    datasets: [
      {
        label: "Total Thrift Plans",
        data: [activePlan, pendingPlan, completedPlan],
        backgroundColor: ["#111217", "#FFE999", "#B1E3FF"],
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

    plugins: {
      legend: {
        display: false,
        position: "right",
        responsive: true,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          padding: 10,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "50%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Doughnut data={data} options={options} plugins={[innerLabel]} />
    </div>
  );
};

export default DoughnutChart;
