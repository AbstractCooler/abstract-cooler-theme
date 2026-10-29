import data from './content/team.json';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = data.team;

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = data.values;
