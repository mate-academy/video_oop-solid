import { Transaction } from './Transaction';


export interface MonthlyReportGenerator {
  getMonthly(date?: Date): string;
}

export interface QuarterlyReportGenerator {
  getQuarterly(date?: Date): string;
}

export interface AnnualReportGenerator {
  getAnnual(date?: Date): string;
}

export abstract class ReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthName(date: Date): string {
    return date.toLocaleString('default', { month: 'long' });
  }

  // abstract getMonthly(date?: Date): string;
  // abstract getQuarterly(date?: Date): string;
  // abstract getAnnual(date?: Date): string;
}
