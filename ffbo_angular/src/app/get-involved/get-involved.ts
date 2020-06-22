import { Url } from 'url';

export interface Profile {
  name: string;
  role?: 'team' | 'alumni' | 'collaborator' | 'contributor' | string;
  img?: ImageData | any;
  desc?: string;
  url?: Url | string;
}
