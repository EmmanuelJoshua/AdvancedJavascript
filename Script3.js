//Promises - Resolved, or rejected

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('reject');
    }
});

promise
    .then(result => result + '!')
    .then(result2 => console.log(result2))
    .then(result3 => {
        throw error
    })
    .catch(() => console.log('Errrooooorr!'))


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Promise2 ran after 3 secs')
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'Promise3 ran after 4 secs')
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Promise4 ran after 5 secs')
});

Promise.all([promise, promise2, promise3, promise4]).then(values => {
    console.log(values)
})

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(values => {
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])
}).catch(() => {
    console.log('Errrooooorrr!')
})

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'Success')
  })

// #2) Run the above promise and make it console.log "success"
promise1.then(result => console.log(result));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve('Success').then(result => console.log(result))

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() => console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls2 = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

    Promise.all(urls2.map(url => {
        return fetch(url).then(response => response.json())
    })).then(values => {
        console.log(values[0])
        console.log(values[1])
        console.log(values[2])
        console.log(values[3])
    }).catch(() => {
        console.log('Erroorrrrr!')
    })

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?