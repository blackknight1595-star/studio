"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { liveScoreData, matches } from "@/lib/mock-data"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { Team } from "@/lib/types"

export default function WinProbabilityChart() {
  const liveMatch = matches.find(m => m.id === liveScoreData.matchId);
  if (!liveMatch) return null;

  const { team1, team2 } = liveMatch;
  const chartData = liveScoreData.winProbability.map(item => ({
    ...item,
    fill: item.team === team1.shortName ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))",
  }))
  
  const chartConfig = {
    probability: {
      label: "Win Probability",
    },
    [team1.shortName]: {
      label: team1.name,
      color: "hsl(var(--chart-1))",
    },
    [team2.shortName]: {
      label: team2.name,
      color: "hsl(var(--chart-2))",
    },
  }

  const id = "pie-interactive"
  const [activeTeam, setActiveTeam] = React.useState(chartData.sort((a,b) => b.probability - a.probability)[0].team)

  const activeIndex = React.useMemo(
    () => chartData.findIndex((item) => item.team === activeTeam),
    [activeTeam, chartData]
  )
  const allTeams = chartData.map((item) => item.team)

  return (
    <Card id={id} className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-lg">Win Probability</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square"
        >
          <PieChart
             onClick={(event, index) => {
                setActiveTeam(chartData[index].team)
             }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="probability"
              nameKey="team"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={(props) => (
                <Sector
                  {...props}
                  outerRadius={72}
                  fill={props.payload.fill}
                />
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    const { cx, cy } = viewBox
                    const matchingEntry = chartData[activeIndex]
                    const team = matchingEntry.team
                    const teamData = (chartConfig as any)[team] as {label: string}
                    
                    return (
                      <>
                        <text
                          x={cx}
                          y={(cy ?? 0) - 10}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="hsl(var(--foreground))"
                          className="text-2xl font-bold"
                        >
                          {matchingEntry.probability.toFixed(0)}%
                        </text>
                        <text
                          x={cx}
                          y={(cy ?? 0) + 10}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="hsl(var(--muted-foreground))"
                          className="text-sm"
                        >
                          {teamData.label}
                        </text>
                      </>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
