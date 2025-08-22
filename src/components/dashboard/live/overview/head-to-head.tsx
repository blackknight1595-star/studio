"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { liveScoreData, matches } from "@/lib/mock-data";
import Image from "next/image";

export default function HeadToHead() {
    const liveMatch = matches.find(m => m.id === liveScoreData.matchId);
    if (!liveMatch) return null;

    const { team1, team2 } = liveMatch;
    const { headToHead } = liveScoreData;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-lg">Head to Head</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <div className="grid grid-cols-3 items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <Image src={team1.logo} alt={team1.name} width={48} height={48} data-ai-hint={`${team1.name} logo`} />
                        <span className="font-bold text-xl">{headToHead.team1Wins}</span>
                        <span className="text-sm text-muted-foreground">{team1.shortName}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-muted-foreground">Total Matches</span>
                        <span className="font-bold text-2xl">{headToHead.totalMatches}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image src={team2.logo} alt={team2.name} width={48} height={48} data-ai-hint={`${team2.name} logo`} />
                        <span className="font-bold text-xl">{headToHead.team2Wins}</span>
                        <span className="text-sm text-muted-foreground">{team2.shortName}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
