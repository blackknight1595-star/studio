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
    { ball: '17.2', event: 'SIX', description: 'Patel to Sharma, SIX! Smashed over long-on! That\'s a huge hit, sails deep into the stands. The crowd is going wild!' },
    { ball: '17.1', event: '2', description: 'Patel to Sharma, 2 runs. A good length delivery outside off, Sharma cleverly clips it off his pads towards deep mid-wicket for a comfortable two.' },
    { ball: '16.6', event: 'FOUR', description: 'Siraj to Yadav, FOUR! Short and wide from Siraj, Yadav cuts it fiercely past point for a boundary. Much needed for Mumbai.' },
    { ball: '16.5', event: '•', description: 'Siraj to Yadav, no run. Yorker-length delivery on the off-stump, Yadav digs it out back to the bowler. Excellent bowling.' },
    { ball: '16.4', event: '1', description: 'Siraj to Sharma, 1 run. Full toss on the pads, Sharma flicks it to deep square leg for a single. He keeps the strike.' },
    { ball: '16.3', event: 'W', description: 'Siraj to Green, OUT! Clean bowled! Siraj comes around the wicket and delivers a searing yorker that castles the stumps. What a delivery! Green is gone!' },
    { ball: '15.6', event: '1', description: 'Hasaranga to Green, 1 run. Tossed up on middle, Green drives it down to long-on for a single.' },
    { ball: '15.5', event: 'SIX', description: 'Hasaranga to Green, SIX! In the slot and dispatched! Green gets down on one knee and slog-sweeps it over the mid-wicket fence for a maximum.' },
    { ball: '15.4', event: '1', description: 'Hasaranga to Sharma, 1 run. Flatter and shorter, Sharma punches it to long-off for one.' },
    { ball: '15.3', event: '•', description: 'Hasaranga to Sharma, no run. Quicker one on the stumps, defended back to the bowler.' },
    { ball: '15.2', event: '1', description: 'Hasaranga to Green, 1 run. Drifting on the pads, tucked away to square leg.' },
    { ball: '15.1', event: '1', description: 'Hasaranga to Sharma, 1 run. Flighted delivery, Sharma eases it down to long-on.' },
    { ball: '2.6', event: '1', description: 'Siraj to Sharma, 1 run. Good length on off, Sharma guides it to third man for a single.' },
    { ball: '2.5', event: 'FOUR', description: 'Siraj to Sharma, FOUR! Edged and four! Length ball outside off, Sharma throws his bat at it, gets a thick outside edge that flies over the slips for a boundary.' },
    { ball: '2.4', event: '•', description: 'Siraj to Sharma, no run. Back of a length, angling in, Sharma defends it from the crease.' },
    { ball: '2.3', event: 'W', description: 'Siraj to Kishan, OUT! Edged and taken! Siraj gets his man. Good length delivery just outside off, Kishan pokes at it and gets a faint edge through to the keeper. Great start for RCB!' },
    { ball: '2.2', event: '•', description: 'Siraj to Kishan, no run. On a good length, defended solidly.' },
    { ball: '2.1', event: '1', description: 'Siraj to Sharma, 1 run. Tucked to mid-wicket for a quick single.' },
    { ball: '1.6', event: 'FOUR', description: 'Patel to Kishan, FOUR! Crunched through covers! Overpitched from Patel, and Kishan leans into the drive, beautiful timing.' },
    { ball: '1.5', event: '•', description: 'Patel to Kishan, no run. Play and a miss! Good comeback from the bowler, beating the outside edge.' },
    { ball: '1.4', event: '1', description: 'Patel to Sharma, 1 run. On the pads, flicked away to fine leg for a single.' },
    { ball: '1.3', event: 'WIDE', description: 'Patel to Sharma, WIDE. Slips it down the leg side, umpire signals a wide.' },
    { ball: '1.2', event: '2', description: 'Patel to Sharma, 2 runs. Clipped off the pads towards the deep square leg boundary, good running between the wickets.' },
    { ball: '1.1', event: '•', description: 'Patel to Sharma, no run. Starts with a length ball on off stump, Sharma defends.' },
    { ball: '0.6', event: '1', description: 'Siraj to Sharma, 1 run. Quick single to get off the mark. Sharma pushes it to mid-off and scampers through.' },
    { ball: '0.5', event: '•', description: 'Siraj to Sharma, no run. Another dot. Good line and length just outside the off-stump.' },
    { ball: '0.4', event: '•', description: 'Siraj to Sharma, no run. Beaten! Angling away, Sharma plays inside the line.' },
    { ball: '0.3', event: '4', description: 'Siraj to Kishan, FOUR! First boundary of the innings! A bit of width on offer and Kishan cuts it hard past point.' },
    { ball: '0.2', event: '1', description: 'Siraj to Kishan, 1 run. Kishan is off the mark with a gentle push to cover.' },
    { ball: '0.1', event: '•', description: 'Siraj to Kishan, no run. Starts off with a perfect outswinger, Kishan lets it go to the keeper.' },
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
