import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense action object', () => {
    const action = removeExpense({ id: '123elli'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123elli'
    });
});

test('should setup editExpense action object', () => {
    const action = editExpense('123elli', {note: ''});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123elli',
        updates: {
            note:''
        }
    });
});

test('should setup addExpense action object with provided values', () => {
    const action = addExpense({
        description:'Elli', 
        note: 'she is great', 
        amount: 10, 
        createdAt: 10
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Elli',
            note: 'she is great',
            amount: 10,
            createdAt: 10
        }
    });
});

test('should setup addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});