"use client";

import { liveScoreData, matches } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import type { Team, BatsmanScore, BowlerStat } from "@/lib/types";
import Image from "next/image";

const BattingTable = ({ team, battingStats }: { team: Team, battingStats: BatsmanScore[] }) => (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <Image src={team.logo} alt={team.name} width={32} height={32} data-ai-hint={`${team.name} logo`} />
            <h3 className="text-lg font-semibold">{team.name} Batting</h3>
        </div>
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Batsman</TableHead>
                        <TableHead className="w-[200px]">Status</TableHead>
                        <TableHead className="text-right">R</TableHead>
                        <TableHead className="text-right">B</TableHead>
                        <TableHead className="text-right">4s</TableHead>
                        <TableHead className="text-right">6s</TableHead>
                        <TableHead className="text-right">SR</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {battingStats.map((batsman) => (
                        <TableRow key={batsman.name}>
                            <TableCell className="font-medium">{batsman.name}</TableCell>
                            <TableCell className="text-xs text-muted-foreground">{batsman.status}</TableCell>
                            <TableCell className="text-right font-bold">{batsman.runs}</TableCell>
                            <TableCell className="text-right">{batsman.balls}</TableCell>
                            <TableCell className="text-right">{batsman.fours}</TableCell>
                            <TableCell className="text-right">{batsman.sixes}</TableCell>
                            <TableCell className="text-right">{batsman.strikeRate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
);

const BowlingTable = ({ team, bowlingStats }: { team: Team, bowlingStats: BowlerStat[] }) => (
    <div>
        <div className="flex items-center gap-2 mb-2">
             <Image src={team.logo} alt={team.name} width={32} height={32} data-ai-hint={`${team.name} logo`} />
            <h3 className="text-lg font-semibold">{team.name} Bowling</h3>
        </div>
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Bowler</TableHead>
                        <TableHead className="text-right">O</TableHead>
                        <TableHead className="text-right">M</TableHead>
                        <TableHead className="text-right">R</TableHead>
                        <TableHead className="text-right">W</TableHead>
                        <TableHead className="text-right">Econ</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bowlingStats.map((bowler) => (
                        <TableRow key={bowler.name}>
                            <TableCell className="font-medium">{bowler.name}</TableCell>
                            <TableCell className="text-right">{bowler.overs}</TableCell>
                            <TableCell className="text-right">{bowler.maidens}</TableCell>
                            <TableCell className="text-right">{bowler.runs}</TableCell>
                            <TableCell className="text-right font-bold">{bowler.wickets}</TableCell>
                            <TableCell className="text-right">{bowler.economy}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
);

export default function LiveScorecard() {
    const liveMatch = matches.find(m => m.id === liveScoreData.matchId);
    if (!liveMatch) return null;

    const { team1, team2 } = liveMatch;
    const { scorecard } = liveScoreData;

    return (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Scorecard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <BattingTable team={team1} battingStats={scorecard.team1Batting} />
                <BowlingTable team={team2} bowlingStats={scorecard.team2Bowling} />
                <Separator />
                <BattingTable team={team2} battingStats={scorecard.team2Batting} />
                <BowlingTable team={team1} bowlingStats={scorecard.team1Bowling} />
            </CardContent>
        </Card>
    );
}
