'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DataVisualizationProps } from "@/lib/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function StatisticsChart({ statistics, title }: DataVisualizationProps) {
  // Early return if no data
  if (!statistics.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <p className="text-gray-500">No data available for visualization</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={statistics}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                name="Cases"
                type="monotone"
                dataKey="cases"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                connectNulls
              />
              <Line
                name="Deaths"
                type="monotone"
                dataKey="deaths"
                stroke="#ff7300"
                connectNulls
              />
              <Line
                name="Vaccinations"
                type="monotone"
                dataKey="vaccinations"
                stroke="#82ca9d"
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 