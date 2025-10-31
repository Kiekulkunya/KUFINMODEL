import { FinancialRatio } from './types';

export const BUSINESS_STATEMENT: string = "Focusing on the SET100 provides a robust and representative sample of the Thai stock market, as these companies constitute a significant portion of total market capitalization and trading volume. This concentration ensures high liquidity, reliable data availability, and relevance to both institutional and retail investors, making any resulting model more practical, credible, and impactful for real-world financial decision-making.";

export const RESEARCH_IMPLICATIONS: string = "Analyzing financial ratios' impact on SET100 stock prices enables the development of sophisticated quantitative investment strategies and more accurate risk models. This research can test the efficient market hypothesis in the context of Thailand, provide empirical evidence for academic theories, and offer valuable insights for policymakers regarding market stability and corporate health, ultimately enhancing the overall understanding of a key emerging market.";

export const FINANCIAL_RATIOS: FinancialRatio[] = [
  // Valuation Ratios
  { 
    name: 'Price-to-Earnings (P/E) Ratio',
    description: "Indicates how much investors are willing to pay per unit of current earnings.",
    key: 'pe_ratio',
    category: 'Valuation',
    justification: "Crucial in a market with many growth and value stocks; helps gauge market sentiment and relative valuation."
  },
  { 
    name: 'Price-to-Book (P/B) Ratio',
    description: "Compares market value to book value. A low ratio can indicate an undervalued company.",
    key: 'pb_ratio',
    category: 'Valuation',
    justification: "Particularly useful for valuing capital-intensive sectors like banking, property, and manufacturing, which are significant in Thailand."
  },
   { 
    name: 'Dividend Yield',
    description: "Shows the annual dividend per share as a percentage of the stock's current price.",
    key: 'dividend_yield',
    category: 'Valuation',
    justification: "Thai investors often favor income-generating stocks, making dividend yield a key factor in investment decisions and stock pricing."
  },
  // Profitability Ratios
  { 
    name: 'Return on Equity (ROE)',
    description: "Measures how effectively management uses shareholders' equity to generate profits.",
    key: 'roe',
    category: 'Profitability',
    justification: "A primary indicator of company performance and management effectiveness, highly watched by both local and foreign investors in the SET."
  },
  {
    name: 'Net Profit Margin',
    description: "Represents the percentage of revenue that becomes profit.",
    key: 'net_profit_margin',
    category: 'Profitability',
    justification: "Shows a company's ability to control costs and pricing power, critical in competitive Thai industries like retail and food."
  },
  // Solvency Ratios
  { 
    name: 'Debt-to-Equity (D/E) Ratio',
    description: "Indicates a company's leverage by comparing total liabilities to shareholders' equity.",
    key: 'de_ratio',
    category: 'Solvency',
    justification: "Key for assessing financial risk, especially for property developers and industrial companies that rely heavily on debt financing."
  },
  {
    name: 'Interest Coverage Ratio',
    description: "Measures a company's ability to handle its interest payments on outstanding debt.",
    key: 'interest_coverage_ratio',
    category: 'Solvency',
    justification: "Provides insight into the financial stability and debt-servicing capacity of a company, important during periods of interest rate volatility."
  },
  // Liquidity Ratios
  {
    name: 'Current Ratio',
    description: "Assesses the ability to pay short-term obligations with short-term assets.",
    key: 'current_ratio',
    category: 'Liquidity',
    justification: "A fundamental measure of short-term financial health, vital for assessing operational stability across all sectors."
  },
  // Efficiency Ratios
  {
    name: 'Asset Turnover Ratio',
    description: "Measures how efficiently a company uses its assets to generate sales revenue.",
    key: 'asset_turnover',
    category: 'Efficiency',
    justification: "Indicates operational efficiency, particularly important for manufacturing, retail, and service-based companies in the SET100."
  },
  // Market Data
  {
    name: 'Stock Price (End of Quarter)',
    description: "The closing stock price at the end of the financial quarter. This is the target variable for prediction.",
    key: 'stock_price',
    category: 'Market Data',
    justification: "The primary dependent variable for the analysis, representing the market's valuation of the company at a specific point in time."
  }
];

export const ECONOMIC_INDICATORS = [
  {
    name: 'GDP Growth Rate',
    relevance: 'Measures the overall health of the Thai economy. Higher growth often correlates with higher corporate earnings and positive stock market performance.',
    sources: 'Bank of Thailand (BOT), NESDC'
  },
  {
    name: 'Inflation Rate (CPI)',
    relevance: 'Affects corporate profitability through input costs and impacts consumer purchasing power. Central bank policy responses to inflation also move markets.',
    sources: 'Ministry of Commerce, Bank of Thailand (BOT)'
  },
  {
    name: 'Policy Interest Rate',
    relevance: 'Set by the Bank of Thailand, it influences borrowing costs for companies and consumers, affecting everything from capital investment to stock valuations.',
    sources: 'Bank of Thailand (BOT)'
  },
  {
    name: 'Exchange Rate (THB/USD)',
    relevance: 'Crucial for a trade-dependent economy like Thailand. It impacts the profitability of export-oriented companies (e.g., electronics, agriculture) and import costs.',
    sources: 'Bank of Thailand (BOT)'
  },
  {
    name: 'Foreign Direct Investment (FDI)',
    relevance: 'Indicates international investor confidence in the long-term prospects of the Thai economy, often leading to capital inflows that can boost the stock market.',
    sources: 'Board of Investment (BOI), Bank of Thailand (BOT)'
  },
  {
    name: 'Consumer Confidence Index (CCI)',
    relevance: 'A leading indicator of consumer spending, which is a major component of GDP. Higher confidence can signal future growth for retail and service sectors.',
    sources: 'University of the Thai Chamber of Commerce (UTCC)'
  }
];

export const SET100_TICKERS: string[] = [
    "ADVANC.BK", "AOT.BK", "AWC.BK", "BAM.BK", "BANPU.BK", "BBL.BK", "BDMS.BK", "BEM.BK", "BGRIM.BK", "BH.BK",
    "BTS.BK", "CBG.BK", "CENTEL.BK", "COM7.BK", "CPALL.BK", "CPF.BK", "CPN.BK", "CRC.BK", "DELTA.BK", "EA.BK",
    "EGCO.BK", "GLOBAL.BK", "GPSC.BK", "GULF.BK", "HMPRO.BK", "INTUCH.BK", "IRPC.BK", "IVL.BK", "JMT.BK", "KBANK.BK",
    "KCE.BK", "KTB.BK", "KTC.BK", "LH.BK", "MINT.BK", "MTC.BK", "OR.BK", "OSP.BK", "PTT.BK", "PTTEP.BK",
    "PTTGC.BK", "RATCH.BK", "SAWAD.BK", "SCB.BK", "SCC.BK", "SCGP.BK", "TIDLOR.BK", "TISCO.BK", "TOP.BK", "TRUE.BK",
    "TTB.BK", "TU.BK", "WHA.BK", "ACE.BK", "AMATA.BK", "AP.BK", "AURA.BK", "BA.BK", "BCP.BK", "BCPG.BK",
    "BEC.BK", "BERLI.BK", "BLA.BK", "BLAND.BK", "CHG.BK", "CK.BK", "CKP.BK", "DOHOME.BK", "EASTW.BK", "EPG.BK",
    "ERW.BK", "FORTH.BK", "GFPT.BK", "GUNKUL.BK", "HANA.BK", "ICHI.BK", "III.BK", "JAS.BK", "JMART.BK",
    "KEX.BK", "MAJOR.BK", "MEGA.BK", "ORI.BK", "PLANB.BK", "PRM.BK", "PSH.BK", "PSL.BK", "PTG.BK", "QH.BK",
    "RCL.BK", "SABUY.BK", "SINGER.BK", "SIRI.BK", "SPALI.BK", "SPRC.BK", "STA.BK", "STEC.BK", "SUPER.BK", "SYNEX.BK"
];

export const SET100_INDUSTRY_MAP: Record<string, string> = {
    "ADVANC.BK": "ICT", "AOT.BK": "Transportation & Logistics", "AWC.BK": "Property Development", "BAM.BK": "Financials", "BANPU.BK": "Energy & Utilities",
    "BBL.BK": "Banking", "BDMS.BK": "Health Care Services", "BEM.BK": "Transportation & Logistics", "BGRIM.BK": "Energy & Utilities", "BH.BK": "Health Care Services",
    "BTS.BK": "Transportation & Logistics", "CBG.BK": "Food & Beverage", "CENTEL.BK": "Tourism & Leisure", "COM7.BK": "Commerce", "CPALL.BK": "Commerce",
    "CPF.BK": "Agro & Food Industry", "CPN.BK": "Property Development", "CRC.BK": "Commerce", "DELTA.BK": "Electronic Components", "EA.BK": "Energy & Utilities",
    "EGCO.BK": "Energy & Utilities", "GLOBAL.BK": "Commerce", "GPSC.BK": "Energy & Utilities", "GULF.BK": "Energy & Utilities", "HMPRO.BK": "Commerce",
    "INTUCH.BK": "ICT", "IRPC.BK": "Energy & Utilities", "IVL.BK": "Petrochemicals & Chemicals", "JMT.BK": "Financials", "KBANK.BK": "Banking",
    "KCE.BK": "Electronic Components", "KTB.BK": "Banking", "KTC.BK": "Financials", "LH.BK": "Property Development", "MINT.BK": "Tourism & Leisure",
    "MTC.BK": "Financials", "OR.BK": "Energy & Utilities", "OSP.BK": "Food & Beverage", "PTT.BK": "Energy & Utilities", "PTTEP.BK": "Energy & Utilities",
    "PTTGC.BK": "Petrochemicals & Chemicals", "RATCH.BK": "Energy & Utilities", "SAWAD.BK": "Financials", "SCB.BK": "Banking", "SCC.BK": "Construction Materials",
    "SCGP.BK": "Packaging", "TIDLOR.BK": "Financials", "TISCO.BK": "Financials", "TOP.BK": "Energy & Utilities", "TRUE.BK": "ICT",
    "TTB.BK": "Banking", "TU.BK": "Agro & Food Industry", "WHA.BK": "Property Development", "ACE.BK": "Energy & Utilities", "AMATA.BK": "Property Development",
    "AP.BK": "Property Development", "AURA.BK": "Commerce", "BA.BK": "Transportation & Logistics", "BCP.BK": "Energy & Utilities", "BCPG.BK": "Energy & Utilities",
    "BEC.BK": "Media & Publishing", "BERLI.BK": "Commerce", "BLA.BK": "Insurance", "BLAND.BK": "Property Development", "CHG.BK": "Health Care Services",
    "CK.BK": "Construction Services", "CKP.BK": "Energy & Utilities", "DOHOME.BK": "Commerce", "EASTW.BK": "Energy & Utilities", "EPG.BK": "Industrial Materials",
    "ERW.BK": "Tourism & Leisure", "FORTH.BK": "ICT", "GFPT.BK": "Agro & Food Industry", "GUNKUL.BK": "Energy & Utilities", "HANA.BK": "Electronic Components",
    "ICHI.BK": "Food & Beverage", "III.BK": "Transportation & Logistics", "JAS.BK": "ICT", "JMART.BK": "Commerce", "KEX.BK": "Transportation & Logistics",
    "MAJOR.BK": "Media & Publishing", "MEGA.BK": "Health Care Services", "ORI.BK": "Property Development", "PLANB.BK": "Media & Publishing", "PRM.BK": "Transportation & Logistics",
    "PSH.BK": "Property Development", "PSL.BK": "Transportation & Logistics", "PTG.BK": "Energy & Utilities", "QH.BK": "Property Development", "RCL.BK": "Transportation & Logistics",
    "SABUY.BK": "Services", "SINGER.BK": "Commerce", "SIRI.BK": "Property Development", "SPALI.BK": "Property Development", "SPRC.BK": "Energy & Utilities",
    "STA.BK": "Agro & Food Industry", "STEC.BK": "Construction Services", "SUPER.BK": "Energy & Utilities", "SYNEX.BK": "ICT"
};