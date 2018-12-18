
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {
          artist_name: 'Taylor Swift',
          artist_img: 'https://i.scdn.co/image/bdaeccb035a8af87b7a70b62217ff5c633ba6c7c'
        },
        {
          artist_name: 'Beyoncé',
          artist_img: 'https://i.scdn.co/image/673cd94546df0536954198867516fee18cee1605'
        },
        {
          artist_name: 'Bring Me The Horizon',
          artist_img: 'https://i.scdn.co/image/12801c8e109f2a11b3f6b181f730eb008d1ad12d'
        },
        {
          artist_name: 'Aesop Rock',
          artist_img: 'https://i.scdn.co/image/d190e645f63fb0430299aa85600afeeb432130e0'
        },
        {
          artist_name: 'Stevie Wonder',
          artist_img: 'https://i.scdn.co/image/c59faacbed7aa770266bad048660810eca204108'
        },
      ]);
    });
};
