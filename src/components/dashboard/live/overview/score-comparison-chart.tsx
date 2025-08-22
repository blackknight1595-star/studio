"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { liveScoreData, matches } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ScoreComparisonChart() {
  const liveMatch = matches.find(m => m.id === liveScoreData.matchId);
  if (!liveMatch) return null;
  
  const { team1, team2 } = liveMatch;
  const data = liveScoreData.scoreComparison.filter(d => d.team1Runs > 0 || d.team2Runs > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-lg">Score Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <Tooltip
              contentStyle={{
                background: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <XAxis dataKey="over" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} label={{ value: "Over", position: "insideBottom", offset: -5, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Line type="monotone" dataKey="team1Runs" name={team1.shortName} stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="team2Runs" name={team2.shortName} stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
