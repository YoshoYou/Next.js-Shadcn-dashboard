"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartData = [
  { month: "January", desktop: 124, mobile: 99 },
  { month: "February", desktop: 997, mobile: 290 },
  { month: "March", desktop: 876, mobile: 20 },
  { month: "April", desktop: 990, mobile: 220 },
  { month: "May", desktop: 210, mobile: 640 },
  { month: "June", desktop: 40, mobile: 84 },
  { month: "July", desktop: 150, mobile: 20 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};
const AppLineChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="desktop"
          type="monotone"
          stroke="var(--color-desktop"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="mobile"
          type="monotone"
          stroke="var(--color-mobile"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
      
    </ChartContainer>
  );
};

export default AppLineChart;
