export interface FinancialRatio {
  name: string;
  description: string;
  key: string;
  category: string;
  justification: string;
}

export interface StockData {
  year: number;
  quarter: string;
  ticker: string;
  symbol: string;
  industry: string;
  [key: string]: string | number; // To allow for dynamic ratio keys
}