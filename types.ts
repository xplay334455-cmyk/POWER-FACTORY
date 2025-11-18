export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  imageType: 'book' | 'program';
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: 'bolt' | 'muscle' | 'lock' | 'target';
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}