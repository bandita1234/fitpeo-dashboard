import React from "react";
import styles from "./dashboard.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import DataCard from "../../components/DataCard/DataCard";
import SellCard from "../../components/SellCard/SellCard";

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

const data = [
  {
    name: "hjcdc",
    age: 34,
    email: "fjcedk",
  },
];

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
        "#FF6AC2",
        "#9400FF",
        "#F1EFEF",
        // "rgba(75, 192, 192, 0.2)",
        // "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
  cutout: "80%",
};

const Dashboard = () => {
  return (
    <div className={styles.dashboard_main}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <h4>Hello Shahrukh 👋,</h4>
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
          <div className={styles.dataCards}>
            <DataCard img={earning} title="Earning" value="$198k" percentage="37.8%" up/>
            <DataCard img={orders} title="Orders" value="$2.4k" percentage="2%" down/>
          </div>
          <div className={styles.dataCards}>
            <DataCard img={balance} title="Balance" value="$2.4k" percentage="2%" down/>
            <DataCard img={total_sales} title="Total Sales" value="$89k" percentage="11%" up/>
          </div>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.barChartContainer}>
          <div className={styles.barChartHeader}>
            <div>
              <h2>Overview</h2>
              <p className="paragraph">Monthly Earning</p>
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
            <h2>Customers</h2>
            <p className="paragraph">Customers that buy products</p>
          </div>
          <div className={styles.doughnutChart}>
            <Doughnut data={doughnutData} />
            <div className={styles.doughnutCenterText}>
              <h2>65%</h2>
              <p>
                Total new <br /> customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.productsellHeader}>
          <div>
            <h2>Product Sell</h2>
          </div>
          <div className={styles.searchDropdown}>
            <div className={styles.productsellSearch}>
              <AiOutlineSearch className={styles.searchIcon} size={20} />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className={styles.footerSearchInput}
              />
            </div>
            <div>
              <select className={styles.barchartSelect}>
                <option value="lastdays">Last 30 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.productSellContainer}>
          <div className={styles.productsellMiddle}>
            <div className={styles.firstHeading}>
              <p className="paragraph">Product Name</p>
            </div>
            <div className={styles.productDataHeader}>
              <p className="paragraph">Stock</p>
              <p className="paragraph">Price</p>
              <p className="paragraph">Total Sales</p>
            </div>
          </div>

          <div className={styles.border}></div>
          {/* <hr/> */}

          <div className={styles.productSellData}>
            <SellCard
              img="https://t3.ftcdn.net/jpg/05/58/94/50/360_F_558945023_HjAgAsPLccgFFfNbM04LOYayMcNpz7ii.jpg"
              product_title="Abstract 3D"
              product_desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />

            <SellCard
              img="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
              product_title="Nature Photograpy"
              product_desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
