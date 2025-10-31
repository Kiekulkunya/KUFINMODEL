import { SET100_TICKERS, FINANCIAL_RATIOS, SET100_INDUSTRY_MAP } from '../constants';
import { StockData } from '../types';

// Helper to generate a random number in a range
const randomInRange = (min: number, max: number, precision: number = 4): number => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
};

const generateRatioValue = (ratioKey: string): number => {
    switch(ratioKey) {
        case 'pe_ratio': return randomInRange(5, 40, 2);
        case 'pb_ratio': return randomInRange(0.5, 5, 2);
        case 'dividend_yield': return randomInRange(0, 0.07);
        case 'roe': return randomInRange(-0.15, 0.25);
        case 'net_profit_margin': return randomInRange(-0.1, 0.20);
        case 'de_ratio': return randomInRange(0.2, 3, 2);
        case 'interest_coverage_ratio': return randomInRange(1, 15, 2);
        case 'current_ratio': return randomInRange(0.8, 3.5, 2);
        case 'asset_turnover': return randomInRange(0.5, 2.5, 2);
        case 'stock_price': return randomInRange(5, 500, 2); // Plausible range for SET100 stocks in THB
        default: return randomInRange(0, 1, 4);
    }
};

export const generateMockData = (): StockData[] => {
  const data: StockData[] = [];
  const today = new Date();
  const startYear = 2000;

  // Loop by Ticker first for panel data structure
  for (const ticker of SET100_TICKERS) {
    for (let year = startYear; year <= today.getFullYear(); year++) {
      for (let quarter = 1; quarter <= 4; quarter++) {
        const currentQuarterDate = new Date(year, quarter * 3, 0); // Last day of the quarter
        if (currentQuarterDate > today) continue; // Use continue to complete the current year's valid quarters

        const row: StockData = {
          year: year,
          quarter: `Q${quarter}`,
          ticker: ticker,
          symbol: ticker.replace('.BK', ''),
          industry: SET100_INDUSTRY_MAP[ticker] || 'Unknown',
        };

        for (const ratio of FINANCIAL_RATIOS) {
            row[ratio.key] = generateRatioValue(ratio.key);
        }
        
        data.push(row);
      }
    }
  }

  return data;
};

export const convertToCSV = (data: StockData[]): string => {
  if (data.length === 0) return '';

  // Define fixed header order for ML compatibility
  const ratioKeys = FINANCIAL_RATIOS.map(r => r.key);
  // Remove stock_price from the general list to place it specifically
  const otherRatioKeys = ratioKeys.filter(key => key !== 'stock_price');
  // New header order as per user request
  const headers = ['year', 'quarter', 'ticker', 'symbol', 'industry', 'stock_price', ...otherRatioKeys];
  
  const csvRows = [headers.join(',')];

  for (const row of data) {
    const values = headers.map(header => {
      // Handle cases where a value might be missing in a row object
      const value = row[header] === undefined || row[header] === null ? '' : row[header];
      const escaped = ('' + value).replace(/"/g, '""'); // CSV escape double quotes
      return `"${escaped}"`;
    });
    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
};

export const downloadCSV = (csvString: string, filename: string): void => {
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};