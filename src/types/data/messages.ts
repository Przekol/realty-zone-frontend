export type InfoType = 'success' | 'error' | 'warning' | 'info';
import { To } from 'react-router-dom';

export type MessageInformation = {
  title: string;
  subTitle?: string;
  description: string;
  to: To | number;
  buttonName: string;
  type: InfoType;
};
