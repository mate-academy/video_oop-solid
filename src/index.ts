import { ReportGenerator } from './ReportGenerator';
import { TransactionStatistics } from './TransactionStatistics';

function printAccountingReport() {
  const transactions = []; // read them from DB
  const reportGenerator = new ReportGenerator(transactions);

  console.log('\n--- Accounting --- ');
  console.log(reportGenerator.getMonthly());
}


function printNextMonthPlan() {
  const transactions = []; // read them from DB
  const stats = new TransactionStatistics(transactions);
  const currentIncome = stats.getTotalIncome();

  console.log('Goal: ', 1.2 * currentIncome);
}



function printInvertorsReport() {
  const transactions = []; // read them from DB
  const reportGenerator = new ReportGenerator(transactions);

  console.log('\n--- Invertors --- ');
  console.log(reportGenerator.getMonthly());
}

