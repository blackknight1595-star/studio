import type { Team, Match, PointsTableEntry, PlayerStat, LiveScore } from './types';

export const teams: Team[] = [
  { id: 'csk', name: 'Chennai Super Kings', shortName: 'CSK', logo: 'https://placehold.co/40x40/FDB913/2D2D2D.png' },
  { id: 'mi', name: 'Mumbai Indians', shortName: 'MI', logo: 'https://placehold.co/40x40/004B8C/FFFFFF.png' },
  { id: 'rcb', name: 'Royal Challengers Bengaluru', shortName: 'RCB', logo: 'https://placehold.co/40x40/EC1C24/000000.png' },
  { id: 'kkr', name: 'Kolkata Knight Riders', shortName: 'KKR', logo: 'https://placehold.co/40x40/3A225D/F2A900.png' },
  { id: 'srh', name: 'Sunrisers Hyderabad', shortName: 'SRH', logo: 'https://placehold.co/40x40/F28C00/000000.png' },
  { id: 'dc', name: 'Delhi Capitals', shortName: 'DC', logo: 'https://placehold.co/40x40/004C93/E51A2C.png' },
  { id: 'pbks', name: 'Punjab Kings', shortName: 'PBKS', logo: 'https://placehold.co/40x40/D81F28/FFFFFF.png' },
  { id: 'rr', name: 'Rajasthan Royals', shortName: 'RR', logo: 'https://placehold.co/40x40/EA1A8C/004B8C.png' },
];

const [csk, mi, rcb, kkr, srh, dc, pbks, rr] = teams;

export const matches: Match[] = [
  { id: 1, team1: kkr, team2: srh, date: '2024-05-26', time: '19:30', venue: 'MA Chidambaram Stadium, Chennai', status: 'Finished' },
  { id: 2, team1: rcb, team2: mi, date: '2024-05-28', time: '19:30', venue: 'Wankhede Stadium, Mumbai', status: 'Live' },
  { id: 3, team1: csk, team2: dc, date: '2024-05-29', time: '19:30', venue: 'Feroz Shah Kotla, Delhi', status: 'Upcoming' },
  { id: 4, team1: pbks, team2: rr, date: '2024-05-30', time: '19:30', venue: 'Sawai Mansingh Stadium, Jaipur', status: 'Upcoming' },
  { id: 5, team1: kkr, team2: mi, date: '2024-06-01', time: '19:30', venue: 'Eden Gardens, Kolkata', status: 'Upcoming' },
  { id: 6, team1: srh, team2: rcb, date: '2024-06-02', time: '15:30', venue: 'M. Chinnaswamy Stadium, Bengaluru', status: 'Upcoming' },
];

export const liveScoreData: LiveScore = {
  matchId: 2,
  team1Score: '182/5',
  team1Overs: '20.0',
  team2Score: '155/3',
  team2Overs: '17.2',
  statusText: 'Mumbai Indians need 28 runs in 16 balls.',
  commentary: [
    { ball: '17.2', event: 'SIX', description: 'Patel to Sharma, SIX! Smashed over long-on!' },
    { ball: '17.1', event: '2', description: 'Patel to Sharma, 2 runs, clipped off the pads.' },
    { ball: '16.6', event: 'FOUR', description: 'Siraj to Yadav, FOUR! Finds the gap through covers.' },
    { ball: '16.5', event: '•', description: 'Siraj to Yadav, no run.' },
    { ball: '16.4', event: '1', description: 'Siraj to Sharma, 1 run, single to deep square leg.' },
    { ball: '16.3', event: 'W', description: 'Siraj to Green, OUT! Clean bowled! What a delivery!' },
  ],
  scorecard: {
    team1Batting: [
      { name: 'Virat Kohli', status: 'c Sharma b Bumrah', runs: 51, balls: 42, fours: 4, sixes: 1, strikeRate: '121.43' },
      { name: 'Faf du Plessis', status: 'lbw b Chawla', runs: 22, balls: 18, fours: 3, sixes: 0, strikeRate: '122.22' },
      { name: 'Rajat Patidar', status: 'run out (SKY)', runs: 35, balls: 25, fours: 2, sixes: 2, strikeRate: '140.00' },
      { name: 'Glenn Maxwell', status: 'not out', runs: 45, balls: 25, fours: 3, sixes: 3, strikeRate: '180.00' },
      { name: 'Dinesh Karthik', status: 'not out', runs: 18, balls: 10, fours: 2, sixes: 1, strikeRate: '180.00' },
    ],
    team1Bowling: [
        { name: 'Jasprit Bumrah', overs: 4, maidens: 0, runs: 28, wickets: 1, economy: '7.00' },
        { name: 'Piyush Chawla', overs: 4, maidens: 0, runs: 35, wickets: 1, economy: '8.75' },
        { name: 'Akash Madhwal', overs: 4, maidens: 0, runs: 40, wickets: 0, economy: '10.00' },
        { name: 'Kumar Kartikeya', overs: 4, maidens: 0, runs: 38, wickets: 0, economy: '9.50' },
        { name: 'Hardik Pandya', overs: 4, maidens: 0, runs: 41, wickets: 0, economy: '10.25' },
    ],
    team2Batting: [
      { name: 'Rohit Sharma', status: 'batting', runs: 78, balls: 50, fours: 6, sixes: 4, strikeRate: '156.00' },
      { name: 'Ishan Kishan', status: 'c Karthik b Siraj', runs: 15, balls: 12, fours: 2, sixes: 0, strikeRate: '125.00' },
      { name: 'Suryakumar Yadav', status: 'batting', runs: 52, balls: 40, fours: 5, sixes: 2, strikeRate: '130.00' },
    ],
    team2Bowling: [
      { name: 'Mohammed Siraj', overs: 4, maidens: 0, runs: 30, wickets: 1, economy: '7.50' },
      { name: 'Harshal Patel', overs: 3.2, maidens: 0, runs: 40, wickets: 0, economy: '12.00' },
      { name: 'Wanindu Hasaranga', overs: 4, maidens: 0, runs: 32, wickets: 0, economy: '8.00' },
      { name: 'Shahbaz Ahmed', overs: 3, maidens: 0, runs: 25, wickets: 0, economy: '8.33' },
      { name: 'Glenn Maxwell', overs: 3, maidens: 0, runs: 25, wickets: 0, economy: '8.33' },
    ],
  }
};

export const pointsTable: PointsTableEntry[] = [
  { position: 1, team: kkr, played: 14, won: 9, lost: 3, nr: 2, points: 20, nrr: '+1.428' },
  { position: 2, team: srh, played: 14, won: 8, lost: 5, nr: 1, points: 17, nrr: '+0.414' },
  { position: 3, team: rr, played: 14, won: 8, lost: 5, nr: 1, points: 17, nrr: '+0.273' },
  { position: 4, team: rcb, played: 14, won: 7, lost: 7, nr: 0, points: 14, nrr: '+0.459' },
  { position: 5, team: csk, played: 14, won: 7, lost: 7, nr: 0, points: 14, nrr: '+0.392' },
  { position: 6, team: dc, played: 14, won: 7, lost: 7, nr: 0, points: 14, nrr: '-0.377' },
  { position: 7, team: pbks, played: 14, won: 5, lost: 9, nr: 0, points: 10, nrr: '-0.353' },
  { position: 8, team: mi, played: 14, won: 4, lost: 10, nr: 0, points: 8, nrr: '-0.318' },
];

export const orangeCap: PlayerStat[] = [
  { rank: 1, playerName: 'Virat Kohli', team: rcb, stat: 741 },
  { rank: 2, playerName: 'Riyan Parag', team: rr, stat: 573 },
  { rank: 3, playerName: 'Travis Head', team: srh, stat: 567 },
  { rank: 4, playerName: 'Sanju Samson', team: rr, stat: 531 },
  { rank: 5, playerName: 'Sai Sudharsan', team: {id: 'gt', name: 'Gujarat Titans', shortName: 'GT', logo: 'https://placehold.co/40x40/1B2133/FFFFFF.png'}, stat: 527 },
];

export const purpleCap: PlayerStat[] = [
  { rank: 1, playerName: 'Harshal Patel', team: pbks, stat: 24 },
  { rank: 2, playerName: 'Varun Chakravarthy', team: kkr, stat: 21 },
  { rank: 3, playerName: 'Jasprit Bumrah', team: mi, stat: 20 },
  { rank: 4, playerName: 'Andre Russell', team: kkr, stat: 19 },
  { rank: 5, playerName: 'Arshdeep Singh', team: pbks, stat: 19 },
];
