import React, { useEffect, useState } from "react";
import "./adminDashboard.css";
import Papa from "papaparse";
import Plotly from "plotly.js-dist";
import ReactApexChart from "react-apexcharts";
import Navbar from "./Navbar/Navbar";

function PieChart() {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/hotel_bookings15.csv");
      const csvData = await response.text();

      const { data } = Papa.parse(csvData, { header: true });

      // Extract values from the desired column
      const columnData = data.map((row) => row.Guest);

      // Count the occurrences of each value
      const valueCounts = {};
      columnData.forEach((value) => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });

      // Prepare the data for the pie chart
      const chartData = {
        series: Object.values(valueCounts),
        labels: Object.keys(valueCounts),
      };

      setChartSeries(chartData.series);

      const options = {
        chart: {
          type: "pie",
          toolbar: {
            show: false,
          },
          width: "100%",
        },
        labels: chartData.labels,
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          offsetY: 10,
          labels: {
            colors: ["#333"],
            useSeriesColors: false,
            fontSize: "14px",
          },
        },
        plotOptions: {
          pie: {
            size: "70%",
            donut: {
              size: "65%",
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return `${Math.round(val)}%`;
          },
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            colors: ["#333"],
          },
        },
        colors: ["#4caf50", "#f44336", "#2196f3"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      setChartOptions(options);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="dashboard-card1">
      <div className="square">
        <div className="elevated-box">
          <h2 style={{ color: "blue" }}>Guests</h2>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="pie"
            height={300}
          />
          <p className="chart-description1">
            The pie chart illustrates the composition of guests in the hotel.
            Among the guests, <span className="highlight">22%</span> are
            existing visitors, indicating a significant number of repeated
            stays. The remaining <span className="highlight">78%</span>{" "}
            represents new guests. This data suggests a healthy mix of both
            loyal customers and potential new clientele. Understanding guest
            composition is vital for effective marketing and customer retention
            strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
function PieChart2() {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/hotel_bookings15.csv");

      const csvData = await response.text();

      const { data } = Papa.parse(csvData, { header: true });

      // Extract values from the desired column
      const columnData = data.map((row) => row.country);

      // Count the occurrences of each value
      const valueCounts = {};
      columnData.forEach((value) => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });

      // Prepare the data for the pie chart
      const chartData = {
        series: Object.values(valueCounts),
        labels: Object.keys(valueCounts),
      };

      setChartSeries(chartData.series);

      const options = {
        chart: {
          type: "pie",
          toolbar: {
            show: false,
          },
          width: "100%",
        },
        labels: chartData.labels,
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          offsetY: 10,
          labels: {
            colors: ["#333"],
            useSeriesColors: false,
            fontSize: "14px",
          },
        },
        plotOptions: {
          pie: {
            size: "70%",
            donut: {
              size: "65%",
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return `${Math.round(val)}%`;
          },
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            colors: ["#333"],
          },
        },
        colors: ["#00FF00", "#f44336", "#2196f3", "#00FFFF", "#FFA500"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      setChartOptions(options);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="dashboard-card1">
      <div className="square2">
        <div className="elevated-box2">
          <h2 style={{ color: "blue" }}>Country</h2>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="pie"
            height={300}
          />
          <p className="chart-description1">
            The pie chart represents the distribution of hotel bookings from
            different countries. Among the total bookings, the majority,
            accounting for <span className="highlight">77%</span>, are from <span className="highlight">India</span>. This indicates a significant
            share of guests coming from India. The second largest contributor is
            the <span className="highlight"> United States</span>, with <span className="highlight">12%</span> of the bookings, followed by <span className="highlight">England </span>
            with<span className="highlight"> 9%</span> and <span className="highlight">Canada </span>represents <span className="highlight">1%</span> of the bookings, while the remaining
            bookings are from various other countries.
          </p>
        </div>
      </div>
    </div>
  );
}

function RoomAssignment() {
  const [roomData, setRoomData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/hotel_bookings15.csv");

      const csvData = await response.text();

      const { data } = Papa.parse(csvData, { header: true });

      setRoomData(data);
      prepareChartData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const prepareChartData = (data) => {
    // Perform necessary data processing and manipulation here
    // Example: Count occurrences of room types
    const roomTypes = {};
    data.forEach((row) => {
      const demandedType = row.reserved_room_type;
      const assignedType = row.assigned_room_type;

      roomTypes[demandedType] = roomTypes[demandedType]
        ? roomTypes[demandedType] + 1
        : 1;
      roomTypes[assignedType] = roomTypes[assignedType]
        ? roomTypes[assignedType] + 1
        : 1;
    });

    // Prepare chart data
    const chartData = {
      options: {
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: Object.keys(roomTypes),
        },
      },
      series: [
        {
          name: "Type Demanded",
          data: Object.values(roomTypes),
        },
      ],
    };

    setChartOptions(chartData.options);
    setChartSeries(chartData.series);
  };

  return (
    <div className="dashboard-card2">
      <div className="room-assignment">
        <h2>Room Assignment</h2>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={400}
          width={900}
        />
      </div>
      <p className="chart-description2">
        The bar graph represents the room assignment distribution in the hotel.
        It shows the number of rooms assigned for each room type demanded by the
        guests. Among the different room types, the highest number of rooms
        assigned is for the{" "}
        <span className="highlight">Lake View Deluxe Room</span>, with a total
        of <span className="highlight">160047</span> rooms assigned. This
        indicates a higher demand for deluxe accommodations compared to other
        room types. Understanding the room assignment distribution helps in
        managing the availability of different room types and meeting the
        guests' preferences effectively.
      </p>
    </div>
  );
}

function BillAmountBoxPlot() {
  const [boxPlotData, setBoxPlotData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/hotel_bookings15.csv");

      const csvData = await response.text();

      const { data } = Papa.parse(csvData, { header: true });

      // Specify the column name for the boxplot
      const columnName = "billAmount";

      // Extract values from the desired column
      const columnData = data.map((row) => Number(row[columnName]));

      setBoxPlotData(columnData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (boxPlotData.length > 0) {
      createBoxPlot();
    }
  }, [boxPlotData]);

  const createBoxPlot = () => {
    const plotData = [
      {
        x: boxPlotData,
        type: "box",
        orientation: "h",
        marker: {
          color: "rgb(7,40,89)",
        },
        line: {
          color: "rgb(7,40,89)",
        },
      },
    ];

    const layout = {
      title: "Bill Amount Box Plot",
      xaxis: {
        title: "Bill Amount",
        zeroline: false,
      },
      yaxis: {
        automargin: true,
      },
    };

    Plotly.newPlot("boxplot", plotData, layout);
  };

  return (
    <div className="dashboard-card3">
      <div className="boxplot">
        <div className="elevated-box3">
          <h2 style={{ color: "purple" }}>Box Plot</h2>
          <div id="boxplot" />
        </div>
      </div>
      <p className="chart-description3">
        The box plot displays the distribution of bill amounts among the data
        points. The whiskers represent the minimum and maximum values, while the
        box represents the interquartile range (IQR). The median is shown as a
        horizontal line within the box. The circles outside the whiskers
        represent the outliers. This box plot helps analyze the spread and
        central tendency of the bill amounts and identify any unusual
        observations.
        <br />
        <br />
        Statistics:
        <ul>
          <li>
            <span className="highlight1"> First Quartile(Q1):</span>
            <span className="highlight"> {"3845.88"}</span>
          </li>
          <li>
            <span className="highlight1">Third Quartile(Q3) :</span>
            <span className="highlight"> {"6804"}</span>
          </li>
          <li>
            <span className="highlight1">Interquartile Range (IQR):</span>{" "}
            <span className="highlight"> {"2958.12"}</span>
          </li>
          <li>
            <span className="highlight1">Highest Value:</span>
            <span className="highlight"> {"24381"}</span>
          </li>
          <li>
            <span className="highlight1">Median:</span>
            <span className="highlight"> {"5151.6"}</span>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <>
      <div className="dashboard-container">
      <Navbar />
        <div className="container">
        <PieChart />
        <PieChart2 />
        </div>
        <BillAmountBoxPlot />
        <RoomAssignment />
      </div>
    </>
  );
}
