const { Namespace, Room } = require('./models');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://yohann:Guitare512$@cluster0.rhesi.mongodb.net/chat?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('Connexion ok!');

    const ns1 = new Namespace({
      imgUrl: '/images/angular.png'
    });

    const ns2 = new Namespace({
      imgUrl: '/images/vue.png'
    });

    const ns3 = new Namespace({
      imgUrl: '/images/react.png'
    });

    ns1
      .save()
      .then( (namespace) => {
        console.log('ns1 created');
        const room1 = new Room({
          namespace: namespace._id,
          index: 0,
          title: "General"
        });
        const room2 = new Room({
          namespace: namespace._id,
          index: 1,
          title: "Hors sujet"
        });
        Promise.all([room1.save(), room2.save()]).then( () => {
          console.log('ns1 room\'s created');
        });
      })
      .catch( (err) => {
        console.log(err);
      });

    ns2
      .save()
      .then( (namespace) => {
        console.log('ns2 created');
        const room1 = new Room({
          namespace: namespace._id,
          index: 0,
          title: "General"
        });
        const room2 = new Room({
          namespace: namespace._id,
          index: 1,
          title: "Hors sujet"
        });
        Promise.all([room1.save(), room2.save()]).then( () => {
          console.log('ns2 room\'s created');
        });
      })
      .catch( (err) => {
        console.log(err);
      });

      ns3
      .save()
      .then( (namespace) => {
        console.log('ns3 created');
        const room1 = new Room({
          namespace: namespace._id,
          index: 0,
          title: "General"
        });
        const room2 = new Room({
          namespace: namespace._id,
          index: 1,
          title: "Hors sujet"
        });
        Promise.all([room1.save(), room2.save()]).then( () => {
          console.log('ns3 room\'s created');
        });
      })
      .catch( (err) => {
        console.log(err);
      });
  });
