import { matches } from "@/lib/mock-data";
import { MatchCard } from "./match-card";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function MatchSchedule() {
  const upcomingMatches = matches.filter(m => m.status === 'Upcoming');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Upcoming Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingMatches.length > 0 ? (
            upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <p>No upcoming matches.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
