import { Transaction } from './Transaction';

export abstract class ReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthName(date: Date) {
    return date.toLocaleString('default', { month: 'long' });
  }

  abstract getMonthly(date?: Date);
  abstract getQuarterly(date?: Date);
  abstract getAnnual(date?: Date);
}
