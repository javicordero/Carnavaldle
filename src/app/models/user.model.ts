export interface User {
  _id?: string;
  username?: string;
  password?: string;
  email?: string;
  gamesPlayed?: number;
  gamesWon?: number;
  gamesWonFirstTry?: number;
  streak?: number;
  maxStreak?: number;
}
