const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: '-27.222633',
    lng: '-49.6555874',
    name: 'Lar das meninos',
    about: 'Presta ass....',
    whatsapp: '99999050',
    images: [
      'https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
      'https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
    ].toString(),
    instructions: 'Venha como se sentir...',
    opening_hours: 'Horário de visitas Das 18 até 8h',
    open_on_weekends: '1',
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  //consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  // deletar dado da tabela

  // await db.run("DELETE FROM orphanages WHERE id='4'");
});
