import { Transaction } from './Transaction';

export class ReportGenerator {
  constructor(
    private transactions: Transaction[],
  ) {}

  getTotalIncome() {
    let total = 0;

    for (const transaction of this.transactions) {
      total += transaction.amount;
    }

    return total;
  }

  getMonthName(date: Date) {
    return date.toLocaleString('default', { month: 'long' });
  }

  getMonthly(date = new Date()) {
    const month = this.getMonthName(date);
    const income = this.getTotalIncome();

    return `${month} report. Income: ${income}`;

    // 
    // let report = '';
    //
    // if (this.type === 'accounting') {
    //   report += ' Accounting details.'
    // } else if (this.type === 'investors') {
    //   report += ' Investors details.'
    // }
    //
  }
}
