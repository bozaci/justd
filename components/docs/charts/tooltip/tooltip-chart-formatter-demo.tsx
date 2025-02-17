"use client"

import { Bar, BarChart, XAxis } from "recharts"
import { Card, Chart, type ChartConfig, ChartTooltip, ChartTooltipContent } from "ui"

const chartData = Array.from({ length: 24 }, (_, index) => {
  const date = new Date(new Date().getFullYear() - 1, index).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
  return {
    date,
    sales: Math.floor(Math.random() * 1000 + 200),
    profit: Math.floor(Math.random() * 500 + 100),
  }
})

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function TooltipChartFormatterDemo() {
  return (
    <Card>
      <Card.Header
        className="items-center pb-0"
        title="Monthly Sales and Profit"
        description="Visualizing data for the last 24 months"
      />
      <Card.Content>
        <Chart config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <Bar dataKey="sales" stackId="a" fill="var(--color-sales)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="profit" stackId="a" fill="var(--color-profit)" radius={[4, 4, 0, 0]} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => (
                    <div className="flex items-center text-xs min-w-[130px] text-muted-fg">
                      {chartConfig[name as keyof typeof chartConfig]?.label || name}
                      <div className="flex gap-0.5 items-baseline ml-auto font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-fg">USD</span>
                      </div>
                    </div>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}
