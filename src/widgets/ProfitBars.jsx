import Spring from "@components/Spring";
import Counter from "@components/Counter";
import Select from "@ui/Select";
import Trend from "@ui/Trend";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// hooks
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

// constants
import { PERIODS } from "@constants/options";

const ProfitBars = () => {
  const { width } = useWindowSize();
  const [period, setPeriod] = useState(PERIODS[0]);
  const [activeBar, setActiveBar] = useState(null);
  const [data, setData] = useState({
    week: { data: [], trend: 0 },
    month: { data: [], trend: 0 },
    year: { data: [], trend: 0 },
  });

  // Fetch data from the Google Apps Script web app
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx4HPz64rEusTJ4Nv2hURt9BReWEWQ9UK1t29zw7gIb5mmFm26qbOmQ3Fgmlx0D4vxl/exec"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnter = (data, index) => {
    setActiveBar(index);
  };

  const handleMouseLeave = () => {
    setActiveBar(null);
  };

  const getTotal = () => {
    let total = 0;
    data[period.value].data.forEach((item) => {
      total += item.value;
    });
    return total;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return <div className="basic-tooltip">{payload[0].value}</div>;
    }

    return null;
  };

  return (
    <Spring className="card flex flex-col p-5 h-[392px] xs:p-6 md:h-full">
      <div className="flex items-center justify-between">
        <h2>Audience Overview</h2>
        <div className="min-w-[105px]">
          <Select value={period} onChange={setPeriod} options={PERIODS} />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
        <Counter className="h1" value={getTotal()} prefix="" />
        <Trend
          labelClass="text-label"
          value={data[period.value]?.trend} // Use optional chaining to prevent errors
          withBg
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={data[period.value]?.data} margin={false}>
            <CartesianGrid
              stroke="var(--cartesian-grid)"
              vertical={false}
              strokeDasharray="8 8"
            />
            <XAxis
              dataKey="name"
              dy={10}
              hide={width < 768}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dx={-10}
              hide={width < 768}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Bar dataKey="value" maxBarSize={30} radius={8}>
              {data[period.value]?.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  style={{ transition: "fill var(--transition)" }}
                  fill={
                    activeBar === index ? "var(--turquoise)" : "var(--blue)"
                  }
                  onMouseEnter={() => handleMouseEnter(entry, index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  );
};

export default ProfitBars;
