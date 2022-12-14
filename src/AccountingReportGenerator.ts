import { ReportGenerator } from './AbstractReportGenerator';
import { TransactionStatistics } from './TransactionStatistics';

export class AccountingReportGenerator extends ReportGenerator {
  getMonthly(date = new Date()) {    
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    return `
      Accounting report.
      ${month} ${date.getFullYear()}.
      Income: ${income}.
    `;
  }

  getQuarterly() {
    return '...';
  }

  getAnnual() {
    return '...';
  }
}