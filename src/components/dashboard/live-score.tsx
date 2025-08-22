import Image from 'next/image';
import { matches, liveScoreData, teams } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from '../ui/separator';
import { motion } from 'framer-motion';

export default function LiveScore() {
  const liveMatch = matches.find(m => m.id === liveScoreData.matchId);

  if (!liveMatch) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Live Match</CardTitle>
        </CardHeader>
        <CardContent>
          <p>There are no live matches at the moment. Please check back later.</p>
        </CardContent>
      </Card>
    );
  }

  const { team1, team2 } = liveMatch;

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary/10">
          <CardTitle className="font-headline text-2xl">
            {team1.name} vs {team2.name}
          </CardTitle>
          <CardDescription>{liveMatch.venue}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image src={team1.logo} alt={team1.name} width={40} height={40} className="rounded-full" data-ai-hint={`${team1.name} logo`} />
                  <span className="font-bold text-lg">{team1.shortName}</span>
                </div>
                <div className="text-2xl font-bold font-mono animate-pulse">{liveScoreData.team1Score} <span className="text-sm font-sans text-muted-foreground">({liveScoreData.team1Overs})</span></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Image src={team2.logo} alt={team2.name} width={40} height={40} className="rounded-full" data-ai-hint={`${team2.name} logo`} />
                  <span className="font-bold text-lg">{team2.shortName}</span>
                </div>
                <div className="text-2xl font-bold font-mono animate-pulse">{liveScoreData.team2Score} <span className="text-sm font-sans text-muted-foreground">({liveScoreData.team2Overs})</span></div>
              </div>
            </div>
            <div className="text-center p-4 bg-accent/20 rounded-lg">
                <p className="font-semibold text-accent-foreground">{liveScoreData.statusText}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-xl">Ball-by-Ball Commentary</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-3">
                {liveScoreData.commentary.map((comment, index) => (
                    <div key={index}>
                        <p className="text-sm">{comment}</p>
                        {index < liveScoreData.commentary.length - 1 && <Separator className="mt-3" />}
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
