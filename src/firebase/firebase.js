import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added 
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = s[];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('expenses').push({
//     description: 'Normal Japan',
//     note: 'Japan',
//     amount: 12,
//     createdAt:0
// });

// database.ref('expenses').push({
//     description: 'Lots of Japan',
//     note: 'More Japan',
//     amount:321,
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Biggest Japan',
//     note: 'Big Japan',
//     amount: 321321,
//     createdAt: 0
// });

// database.ref('notes/-LeXrtPrvqnOKrGG-Z0G').remove();

// const firebaseNotes = {
//     notes: {
//         apoijasd: {
//             title: 'First note!',
//             body: 'This is my note'
//         }, 
//         fdsafdsafdas: {
//             title: 'Second note!',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {    
//     id: '321afdsa',
//     title: 'Second note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });


// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(33);
// }, 10500);

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//     console.log('This failed.', e);
//     });

// database.ref().set({
//     name: 'Elli Haugen',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Japan traveller',
//         company: 'Japan best'
//     },
//     location: {
//         city: 'Tokyo',
//         country: 'Japan'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Kyoto best',
//     'location/city': 'Kyoto'
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Removal failed.', e);
// });
