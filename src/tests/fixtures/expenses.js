import moment from 'moment';

export default [{
    id: '1',
    description: 'Elli',
    note: '',
    amount: 1321,
    createdAt: 0
}, {
    id: '2',
    description: 'Phillip',
    note: '',
    amount: 10,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'ELLIP',
    note: '',
    amount: 20,
    createdAt: moment(0).add(4, 'days').valueOf()
}];