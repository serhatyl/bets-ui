import type {JSX} from 'react';

export interface EventRateColumnsModel {
  id: number;
  label: string | JSX.Element;
  rateType?: string;
  value?: string;
}
