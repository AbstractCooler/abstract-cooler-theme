import data from './content/pricing.json';

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const plans: Plan[] = data.items;
