import Image from 'next/image';
import { orangeCap, purpleCap } from '@/lib/mock-data';
import type { PlayerStat } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LeaderboardTable = ({ title, data, statLabel, icon }: { title: string, data: PlayerStat[], statLabel: string, icon: string }) => (
  <Card className="flex-1 min-w-[300px]">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 font-headline text-2xl">
        <span className="text-2xl">{icon}</span>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead className="text-right">{statLabel}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((player) => (
              <TableRow key={player.rank}>
                <TableCell className="font-medium">{player.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image
                      src={player.team.logo}
                      alt={player.team.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                      data-ai-hint={`${player.team.name} logo`}
                    />
                    <div>
                        <div className="font-medium">{player.playerName}</div>
                        <div className="text-xs text-muted-foreground">{player.team.shortName}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold">{player.stat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

export default function Leaderboards() {
  return (
    <div className="flex flex-wrap gap-4">
      <LeaderboardTable title="Orange Cap" data={orangeCap} statLabel="Runs" icon="🟠" />
      <LeaderboardTable title="Purple Cap" data={purpleCap} statLabel="Wickets" icon="🟣" />
    </div>
  );
}
