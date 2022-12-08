import { Transaction } from './Transaction';

export class IncomeCalculator {
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
}