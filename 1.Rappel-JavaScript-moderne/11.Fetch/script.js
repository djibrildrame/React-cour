fetch("https://jsonplaceholder.typicode.com/users")
.then(data => {
    console.log(data);
    
    return data.json()
  //  if (!data.ok) throw new Error('Erreur')
}) .then(data => {

    console.log(data);
    
})
.catch(e => {
    console.log(e);
    
})