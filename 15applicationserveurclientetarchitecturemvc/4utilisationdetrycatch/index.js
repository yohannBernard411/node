const promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    reject('KO man!');
  }, 3000);
})

const promise2 = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve('OK man!(2)');
  }, 3000);
})

async function func() {
  try {
    const val = await promise;
    return val;
  } catch(err) {
    console.log(err);
  }
}

// cette fonction peut également s'ecrire avec la fat arrow:
// const func = async () => { }

// func(); // emet une erreur! Pour recuperer cette erreur on peut:
// func().catch( (err) => {
//   console.log(err);
// })

func(); // mais il serait mieux de gerer l'erreur dans func(), c'est pour cela qu'on a try et catch!

