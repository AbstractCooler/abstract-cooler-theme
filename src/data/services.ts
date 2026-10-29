import data from './content/services.json';

export interface Service {
  title: string;
  description: string;
  details: string[];
  format: string;
}

export const services: Service[] = data.items;
