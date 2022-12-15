import { ReportGenerator } from './AbstractReportGenerator';
import { AccountingReportGenerator } from './AccountingReportGenerator';


const transactions = []; // read them from DB

printReport(
  new AccountingReportGenerator(transactions)
);


function printReport(reportGenerator: ReportGenerator) {
  console.log('--- Monthly ---');
  console.log(reportGenerator.getMonthly());

  console.log('--- Quarterly ---');
  console.log(reportGenerator.getQuarterly());

  console.log('--- Annual ---');
  console.log(reportGenerator.getAnnual());
}
