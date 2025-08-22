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

export interface LiveScore {
  matchId: number;
  team1Score: string;
  team1Overs: string;
  team2Score: string;
  team2Overs: string;
  commentary: string[];
  statusText: string;
}
