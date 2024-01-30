export type Token = {
  userId: number;
  expiresAt: Date;
  accessToken: string;
  refreshToken: string;
};
