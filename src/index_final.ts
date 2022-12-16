import { AccountingReportGenerator } from './AccountingReportGenerator';
import { Transaction } from './Transaction';

interface TransactionStorage {
  getAll(): Transaction[];
}

abstract class FileStorage {
  abstract read(): Transaction[];
}

class JSONFileStorage {
  constructor(fileName: string) {}

  readFromJSON() {
    return [];
  }
}

class CSVFileStorage {
  constructor(fileName: string) {}

  readFromSCV() {
    return [];
  };
}

class DbStorage {
  constructor(tableName: string) {}

  select(): Transaction[] {
    return [];
  }
}

class App {
  printReport() {
    const storage = new JSONFileStorage('transactions.json');
    const transactions = storage.readFromJSON();

    const reportGenerator = new AccountingReportGenerator(transactions);
    const report = reportGenerator.getMonthly()

    console.log(report);
  }
}
