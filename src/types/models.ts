/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Opinion {
  id: number;
  value: number;
  profileId: number;
  opinionId: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  opinionsReceived: Opinion[];
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
