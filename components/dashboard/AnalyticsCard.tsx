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
  <div className="p-4 sm:p-6 md:p-8">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-blue-100 p-6 rounded shadow-md text-center transition-transform transform hover:scale-105"
        >
          <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
          <p className="text-2xl font-bold text-blue-700 mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AnalyticsCard;
