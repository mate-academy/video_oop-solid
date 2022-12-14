import { ReportGenerator } from './AbstractReportGenerator';
import { TransactionStatistics } from './TransactionStatistics';

export class InvestorsReportGenerator extends ReportGenerator {
  getMonthly(date = new Date()) {    
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    return `
      ${month} report for Investors.
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