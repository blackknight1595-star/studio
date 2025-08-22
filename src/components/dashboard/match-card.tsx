import Image from 'next/image';
import type { Match } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { MatchInsightsDialog } from './match-insights-dialog';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const { team1, team2, date, time, venue } = match;

  const matchDate = new Date(date);
  const formattedDate = matchDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <div className="flex justify-around items-center text-center">
          <div className="flex flex-col items-center gap-2">
            <Image src={team1.logo} alt={team1.name} width={60} height={60} className="rounded-full" data-ai-hint={`${team1.name} logo`} />
            <span className="font-bold text-lg">{team1.shortName}</span>
          </div>
          <span className="text-2xl font-bold text-muted-foreground">vs</span>
          <div className="flex flex-col items-center gap-2">
            <Image src={team2.logo} alt={team2.name} width={60} height={60} className="rounded-full" data-ai-hint={`${team2.name} logo`} />
            <span className="font-bold text-lg">{team2.shortName}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <Separator className="my-2" />
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{time} IST</span>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{venue}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <MatchInsightsDialog match={match} />
      </CardFooter>
    </Card>
  );
}
