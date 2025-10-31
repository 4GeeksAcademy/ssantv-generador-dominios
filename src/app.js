let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'flores', 'patio'];
let extension = ['com', 'es', 'dev', 'io', 'net'];

const elemExcuses = document.getElementById("excuses")
pronoun.forEach(pronoun => {
  adj.forEach(adj => 
    noun.forEach(noun => {
      extension.forEach(extension=> {
        let result;
        if (noun.endsWith(extension)) {
          result =`${pronoun}${adj}${noun.slice(0,-extension.length)}.${extension}`
          elemExcuses.innerHTML += `<li class="list-group-item bg-warning"> ${result} </li>`
        } else {
          result =`${pronoun}${adj}${noun}.${extension}`
          elemExcuses.innerHTML += `<li class="list-group-item"> ${result} </li>`}
      })
    })
  )
})
console.log(elemExcuses)