export interface SelectOption {
  text: string;
  value: any;
}

export interface DataValue {
  value: number;
  text: string;
  availability: number;
  performance: number;
  quality: number;
}

export interface Station {
  id: string;
  name: string;
  type: string;
  refProduct: string;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  stations: Station[];
}

export interface Parameters {
  product: string;
  station: string;
  calculationType: CalculationType;
  reportingPeriod: number;
}

export type ResponseMessage = {
  content: any;
  hasError: boolean;
  message: string;
};

export enum CalculationType {
  Simple = 0,
  Advanced = 1
}
