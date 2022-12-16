import { AccountingReportGenerator } from './AccountingReportGenerator';
import { MonthlyReportGenerator } from './ReportGenerator';
import { Transaction } from './Transaction';

interface TransactionStorage {
  connect(): FileStorage;
  getAll(): Transaction[];
}

class DbStorage implements TransactionStorage {
  constructor(tableName: string) {}

  getAll(): Transaction[] {
    return [];
  }
}

abstract class FileStorage implements TransactionStorage {
  getAll(): Transaction[] {
    if (this instanceof JSONFileStorage) {
      
    }
  }
}

class JSONFileStorage extends FileStorage {
  constructor(fileName: string) {
    super();
  }

  getAll(): Transaction[] {
    return [];
  }
}

class CSVFileStorage extends FileStorage {
  constructor(fileName: string) {
    super();
  }

  getAll() {
    return [];
  };
}

class App {
  printReport(storage: TransactionStorage, reportGenerator: MonthlyReportGenerator) {
    const transactions = storage.getAll();
    const report = reportGenerator.getMonthly()

    console.log(report);
  }
}
