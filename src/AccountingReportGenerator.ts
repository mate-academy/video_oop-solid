import { ReportGenerator } from './ReportGenerator';
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

  getAnnual(date = new Date()) {
    return `Accounting report for ${date.getFullYear()}.`;
  }
}