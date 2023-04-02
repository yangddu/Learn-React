import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

type ApexPropType = {
  data: any;
  name: string;
}[];

interface ChartProps {
  coinId: string;
}
const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000
    }
  );

  const options: ApexOptions = {
    theme: {
      mode: "dark"
    },
    chart: {
      type: "line",
      height: 300,
      width: 500,
      toolbar: {
        show: false
      },
      background: "transparent"
    },
    stroke: {
      curve: "smooth",
      width: 4
    },
    yaxis: {
      show: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      },
      type: "datetime",
      categories: data?.map((price) => price.time_close)
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#0be881"],
        stops: [0, 100]
      }
    },
    colors: ["red"],
    tooltip: {
      y: {
        formatter: (value) => `$ ${value.toFixed(2)}`
      }
    }
  };

  const series: ApexPropType = [
    {
      data: data?.map((price) => price.close),
      name: "Price"
    },
    {
      data: data?.map((price) => price.open),
      name: "sales"
    }
  ];
  return (
    <div>
      {isLoading ? (
        "Loading char..."
      ) : (
        <ApexChart type="line" series={series} options={options} />
      )}
    </div>
  );
};

export default Chart;
