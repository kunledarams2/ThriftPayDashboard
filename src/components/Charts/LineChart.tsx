import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getInitials, range } from "../../components/utils/util";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        //   position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Outflow",
        data: [200, 450, 500, 250, 400, 10, 520],
        // data: range(100, 14550, 120),
        borderColor: "#CC3366",
        backgroundColor: "#CC3366",
        tension: 0.5,
        borderWidth: 1,
        pointRadius: 1,
      },
      {
        label: "Inflow",
        data: [400, 350, 620, 390, 330, 490, 300],
        borderColor: "#111217",
        backgroundColor: "#111217",
        tension: 0.5,
        borderWidth: 1,
        pointRadius: 1,
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "fit-content",
        marginTop: 25,
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
