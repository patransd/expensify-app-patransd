import moment from 'moment';

export default [{
    id: '1',
    description: 'Elli',
    notes: '',
    amount: 1321,
    createdAt: 0
}, {
    id: '2',
    description: 'Phillip',
    notes: '',
    amount: 10,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'ELLIP',
    notes: '',
    amount: 20,
    createdAt: moment(0).add(4, 'days').valueOf()
}];