import React from "react";
import styles from "./dashboard.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import DataCard from "../../components/DataCard/DataCard";

import { Bar, Doughnut } from "react-chartjs-2";
// import faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

//assets
import earning from "../../assets/earning.svg";
import orders from "../../assets/orders.svg";
import balance from "../../assets/balance.svg";
import total_sales from "../../assets/total_sales.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      display: false,
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const barData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [20, 30, 40, 20, 50, 40, 30, 60, 50, 40, 35, 40],
      backgroundColor: Array(12).fill("#e5e4ee"),
    },
  ],
};

barData.datasets[0].backgroundColor[7] = "#5272F2";

barData.datasets[0].barPercentage = 0.8;
barData.datasets[0].borderRadius = 10;

export const doughnutData = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      // label: '# of Votes',
      data: [12, 19, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        // "rgba(75, 192, 192, 0.2)",
        // "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div style={{width: '100%', padding: '3%'}}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <h4>Hello Shahrukh 👋 ,</h4>
          <div className={styles.searchContainer}>
            <AiOutlineSearch className={styles.searchIcon} />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.datacardContainer}>
          {/* <div className=> */}
          <DataCard img={earning} title="Earning" value="$198k" />
          <DataCard img={orders} title="Orders" value="$2.4k" />
          <DataCard img={balance} title="Balance" value="$2.4k" />
          <DataCard img={total_sales} title="Total Sales" value="$89k" />
          {/* </div> */}
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.barChartContainer}>
          <div className={styles.barChartHeader}>
            <div>
              <h2>fjjdfjv</h2>
              <p>njkfnvjkndf</p>
            </div>
            <div>
              <select className={styles.barchartSelect}>
                <option value="Quarterly">Quarterly</option>
              </select>
            </div>
          </div>
          <Bar options={options} data={barData} />
        </div>

        <div className={styles.doughnutContainer}>
          <div className={styles.doughnutHeader}>
            <h2>fjjdfjv</h2>
            <p>njkfnvjkndf</p>
          </div>
          <div className={styles.doughnutChart}>
            <Doughnut data={doughnutData} />
            <div className={styles.doughnutCenterText}>
              <h2>65%</h2>
              <p>Additional Details</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
