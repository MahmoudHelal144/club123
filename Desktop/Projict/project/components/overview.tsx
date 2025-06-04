"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "1",
    total: 75,
  },
  {
    name: "2",
    total: 82,
  },
  {
    name: "3",
    total: 78,
  },
  {
    name: "4",
    total: 85,
  },
  {
    name: "5",
    total: 90,
  },
  {
    name: "6",
    total: 88,
  },
  {
    name: "7",
    total: 79,
  },
  {
    name: "8",
    total: 81,
  },
  {
    name: "9",
    total: 76,
  },
  {
    name: "10",
    total: 85,
  },
  {
    name: "11",
    total: 92,
  },
  {
    name: "12",
    total: 87,
  },
  {
    name: "13",
    total: 83,
  },
  {
    name: "14",
    total: 78,
  },
  {
    name: "15",
    total: 80,
  },
  {
    name: "16",
    total: 84,
  },
  {
    name: "17",
    total: 89,
  },
  {
    name: "18",
    total: 86,
  },
  {
    name: "19",
    total: 82,
  },
  {
    name: "20",
    total: 77,
  },
  {
    name: "21",
    total: 81,
  },
  {
    name: "22",
    total: 85,
  },
  {
    name: "23",
    total: 83,
  },
  {
    name: "24",
    total: 79,
  },
  {
    name: "25",
    total: 82,
  },
  {
    name: "26",
    total: 86,
  },
  {
    name: "27",
    total: 88,
  },
  {
    name: "28",
    total: 84,
  },
  {
    name: "29",
    total: 80,
  },
  {
    name: "30",
    total: 78,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip formatter={(value) => [`${value}%`, "Attendance"]} labelFormatter={(label) => `Day ${label}`} />
        <Bar dataKey="total" fill="#2563eb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
