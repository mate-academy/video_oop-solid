import { Transaction } from './Transaction';
import { TransactionStatistics } from './TransactionStatistics';

export class ReportGenerator {
  constructor(
    private transactions: Transaction[],
  ) {}

  getMonthName(date: Date) {
    return date.toLocaleString('default', { month: 'long' });
  }

  getMonthly(date = new Date()) {
    const month = this.getMonthName(date);
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();

    return `${month} report. Income: ${income}`;

    //
    // let report = '';
    
    // if (this.type === 'accounting') {
    //   report += ' Accounting details.'
    // } else if (this.type === 'investors') {
    //   report += ' Investors details.'
    // }
    //
  }
}
