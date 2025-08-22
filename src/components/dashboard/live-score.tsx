import { matches, liveScoreData } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LiveOverview from "./live/overview";
import LiveCommentary from "./live/commentary";
import LiveScorecard from "./live/scorecard";
import LiveStats from "./live/stats";

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

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
        <TabsTrigger value="commentary">Commentary</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <LiveOverview />
      </TabsContent>
      <TabsContent value="scorecard">
        <LiveScorecard />
      </TabsContent>
      <TabsContent value="commentary">
        <LiveCommentary />
      </TabsContent>
      <TabsContent value="stats">
        <LiveStats />
      </TabsContent>
    </Tabs>
  );
}
