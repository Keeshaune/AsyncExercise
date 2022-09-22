// const fetcher = (index) =>  {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
//     .then(res => {
//         return res.json()
//     })
//     .then(res2 => {
//         console.log(res2)
//     })
//     .catch(err => console.log(err))
// }
// fetcher(1)

// const fetcher2 = async (index) => {
//     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
//     const response = await data.json()
//     console.log(response)
// }
// fetcher2(2).catch(err => console.log("error"))


// const myPromise = new Promise((resolve, reject) => {
//     let value = fetch(`https://pokeapi.co/api/v2/pokemon/1`)
//     .then( res => res.json())
//     .then( data => data);
//     console.log(value);
//     if (value) {
//         resolve(value)
//     } else {
//         reject()
//     }
// })


const myPromise = new Promise((resolve, reject) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(response => {
      if (response.ok) {
        resolve(response.json())
      } else {
        reject(new Error('error'))
      }
    }, error => {
      reject(new Error(error.message))
    })
  })

  myPromise.then(value => console.log(value))
