import { FC } from "react";

interface AnalyticsData {
  title: string;
  value: string | number;
}

const data: AnalyticsData[] = [
  { title: "Total Posts", value: 42 },
  { title: "Total Comments", value: 120 },
  { title: "Monthly Views", value: "10.5K" },
];

const AnalyticsCard: FC = () => (
  <div className="grid grid-cols-3 gap-4 mt-6">
    {data.map((item, index) => (
      <div
        key={index}
        className="bg-blue-100 p-5 rounded shadow-md text-center"
      >
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-2xl font-bold mt-2">{item.value}</p>
      </div>
    ))}
  </div>
);

export default AnalyticsCard;
