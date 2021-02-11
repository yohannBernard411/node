
const promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve('OK man!');
  }, 3000);
})

// ne bloque pas le cpu en attendant donc pas de perte de performances!
async function func() {
  const val = await promise;
  console.log(val);
  return val;
}
// attention, le await n'est utilisable qu'a l'interieur d'une fonction async!!!!

// on peut enclencher plusieurs promesses en méme temps pour eviter d'attendre avec un array de promesses:
// async function func() {
// const val = await Promise.all([
//   promise, promise2
// ])
// }

func()
console.log('Afficher avant ou apres???');
