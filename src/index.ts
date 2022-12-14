import { ReportGenerator, ReportTypes } from './ReportGenerator';
import { AccountingReportGenerator } from './AccountingReportGenerator';
import { InvestorsReportGenerator } from './InvestorsReportGenerator';

function printReport() {
  const transactions = []; // read them from DB

  // Accounting report
  const accountingReportGenerator = new AccountingReportGenerator(
    transactions,
  );

  console.log(
    accountingReportGenerator.getQuarterly(),
    accountingReportGenerator.getAnnual(),
  );

  // Investors report
  const investorsReportGenerator = new InvestorsReportGenerator(
    transactions,
  );

  console.log(
    investorsReportGenerator.getMonthly(),
    investorsReportGenerator.getAnnual(),
  );
}
