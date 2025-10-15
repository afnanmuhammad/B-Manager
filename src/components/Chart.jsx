import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [250, 120, 200, 350, 180, 220, 300],
        backgroundColor: "#04C8C8",
        borderRadius: 100,
        borderSkipped: false,
        barThickness: 14,
        categoryPercentage: 0.5, // group width smaller
        barPercentage: 0.4,      // thinner bar inside group
      },
      {
        label: "Withdraw",
        data: [480, 330, 310, 450, 90, 340, 360],
        backgroundColor: "#1E40FF",
        borderRadius: 100,
        borderSkipped: false,
        barThickness: 14,
        categoryPercentage: 0.5,
        barPercentage: 0.4,
      },
    ],

  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // fills full height of parent
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          color: "#475569",
        },
      },
      title: {
        display: true,
        text: "Weekly Activity",
        align: "start",
        color: "#0f172a",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#475569" }, // x-axis text
        stacked: false,
      },
      y: {
        beginAtZero: true,
        grace: "10%",
        grid: { color: "#f1f5f9" },
        ticks: { color: "#0f172a" }, // y-axis text
      },
    },

  };

  return (
    <div className="w-full h-full bg-white rounded-lg p-4 shadow-sm">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
