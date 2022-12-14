import { Transaction } from './Transaction';
import { TransactionStatistics } from './TransactionStatistics';

export class ReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthly(date = new Date()) {
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    return `${month} report. Income: ${income}.`;
  }

  // getQuarterly(date = new Date()) {
  //   return `${this.getQuarter(date)} quarter report`;
  // }

  getAnnual(date = new Date()) {
    return `${date.getFullYear()} report`;
  }

  protected getMonthName(date: Date) {
    return date.toLocaleString('default', { month: 'long' });
  }

  protected getQuarter(date: Date) {
    return Math.floor((date.getMonth() + 1) / 4);
  }
}
