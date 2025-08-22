export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
}

export interface Match {
  id: number;
  team1: Team;
  team2: Team;
  date: string;
  time: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Finished';
}

export interface PointsTableEntry {
  position: number;
  team: Team;
  played: number;
  won: number;
  lost: number;
  nr: number;
  points: number;
  nrr: string;
}

export interface PlayerStat {
  rank: number;
  playerName: string;
  team: Team;
  stat: number;
}

export interface BatsmanScore {
    name: string;
    status: string;
    runs: number;
    balls: number;
    fours: number;
    sixes: number;
    strikeRate: string;
}

export interface BowlerStat {
    name: string;
    overs: number;
    maidens: number;
    runs: number;
    wickets: number;
    economy: string;
}

export interface Scorecard {
    team1Batting: BatsmanScore[];
    team1Bowling: BowlerStat[];
    team2Batting: BatsmanScore[];
    team2Bowling: BowlerStat[];
}

export interface CommentaryEvent {
  ball: string;
  event: string;
  description: string;
}

export interface LiveScore {
  matchId: number;
  team1Score: string;
  team1Overs: string;
  team2Score: string;
  team2Overs: string;
  commentary: CommentaryEvent[];
  statusText: string;
  scorecard: Scorecard;
}
