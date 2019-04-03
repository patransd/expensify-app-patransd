import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should setup setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should setup setEndDate action object', () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    });
});

test('should setup setTextFilter action object with provided values', () => {
    const text = 'Elli'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should setup setTextFilter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should setup sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should setup sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});