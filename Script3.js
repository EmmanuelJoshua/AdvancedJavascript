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

//ASYNC and AWAIT

//provides another way to do async tasks without using fetch and a .then block

//fetch way

fetch('https://swapi.co/api/people/4')
    .then(response => response.json())
    .then(console.log)

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


//async way

async function fetchUsers(){
    const resp = await fetch('https://swapi.co/api/people/4');
    const data = await resp.json();
    console.log(data)
}
async function fetchAllData(){
    try{
        const [char1, char2,  char3, char4] = Promise.all(urls2.map(url => {
            return fetch(url).then(response => response.json())
        }));
        console.log(char1)
        console.log(char2)
        console.log(char3)
        console.log(char4)
    }catch(error){
        console.log('error', error)
    }

}

// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

  async function getShip(){
      const response = await fetch('https://swapi.co/api/starships/9/')
      const data = await response.json()
      console.log(data)
  }

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls3 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls3.map(async function(url) {
    const response = await fetch(url);
    return response.json();
}));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

async function myFetch(url){
    try{
        return await fetch(url).then(resp => resp.json())
    }catch(error){
        console.log('ooooooops', error)
    }
  
}

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

const getData = async function() {
    try {
      const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
          const response = await fetch(url);
          return response.json();
      }));
      console.log('users', users);
      console.log('posta', posts);
      console.log('albums', albums);
    } catch (err) {
      console.log('ooooooops', err);
    }
  }