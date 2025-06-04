"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { name: "1", total: 75 },
  { name: "2", total: 82 },
  { name: "3", total: 78 },
  { name: "4", total: 85 },
  { name: "5", total: 90 },
  { name: "6", total: 88 },
  { name: "7", total: 79 },
  { name: "8", total: 81 },
  { name: "9", total: 76 },
  { name: "10", total: 85 },
  { name: "11", total: 92 },
  { name: "12", total: 87 },
  { name: "13", total: 83 },
  { name: "14", total: 78 },
  { name: "15", total: 80 },
  { name: "16", total: 84 },
  { name: "17", total: 89 },
  { name: "18", total: 86 },
  { name: "19", total: 82 },
  { name: "20", total: 77 },
  { name: "21", total: 81 },
  { name: "22", total: 85 },
  { name: "23", total: 83 },
  { name: "24", total: 79 },
  { name: "25", total: 82 },
  { name: "26", total: 86 },
  { name: "27", total: 88 },
  { name: "28", total: 84 },
  { name: "29", total: 80 },
  { name: "30", total: 78 },
]

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          formatter={(value) => [`${value}%`, "نسبة الحضور"]}
          labelFormatter={(label) => `اليوم ${label}`}
          contentStyle={{
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            textAlign: "right",
            direction: "rtl",
          }}
        />
        <Bar dataKey="total" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} barSize={12} />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E88E5" stopOpacity={1} />
            <stop offset="100%" stopColor="#7E57C2" stopOpacity={0.8} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  )
}
