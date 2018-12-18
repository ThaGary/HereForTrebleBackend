
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Gary',
          last_name: 'Anderson',
          email: 'g@email.com',
          password: '1234',
          avatar: 'https://i.imgur.com/rthbw0k.png'
        },
        {
          first_name: 'Peter',
          last_name: 'Fu',
          email: 'p@email.com',
          password: '1234',
          avatar: 'https://i.imgur.com/zettvG1.png'
        },
        {
          first_name: 'Brandon',
          last_name: 'RedShirt',
          email: 'b@email.com',
          password: '1234',
          avatar: 'https://i.imgur.com/zettvG1.png'
        },
        {
          first_name: 'Sonja',
          last_name: 'Chacon',
          email: 's@email.com',
          password: '1234',
          avatar: 'https://i.imgur.com/zettvG1.png'
        }
      ]);
    });
};
