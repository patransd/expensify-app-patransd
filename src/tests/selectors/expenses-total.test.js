import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    console.log(total);
    expect(total).toBe(0);
});

test('should correctly add up single expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    console.log(total);
    expect(total).toBe(1321);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    console.log(total);
    expect(total).toBe(1351);
});