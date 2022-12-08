import { ReportGenerator } from './ReportGenerator';

function printAccountingReport() {
  const transactions = []; // read them from DB
  const reportGenerator = new ReportGenerator(transactions);

  console.log('\n--- Accounting --- ');
  console.log(reportGenerator.getMonthly());
}

//
// function printNextMonthPlan() {
//   const transactions = []; // read them from DB
//   const reportGenerator = new ReportGenerator(transactions);
//   const currentIncome = reportGenerator.getTotalIncome();

//   console.log('Goal: ', 1.2 * currentIncome);
// }
//

// 
// function printInvertorsReport() {
//   console.log('\n--- Invertors --- ');
//   console.log(reportGenerator.getMonthly());
// }
//
