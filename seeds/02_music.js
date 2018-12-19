
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music').del()
    .then(function () {
      // Inserts seed entries
      return knex('music').insert([
        {
          artist_name: 'Taylor Swift',
          artist_img: 'https://i.scdn.co/image/bdaeccb035a8af87b7a70b62217ff5c633ba6c7c'
          spotify_id: '06HL4z0CvFAxyc27GXpf02'
        },
        {
          artist_name: 'Beyoncé',
          artist_img: 'https://i.scdn.co/image/673cd94546df0536954198867516fee18cee1605'
          spotify_id: '6vWDO969PvNqNYHIOW5v0m'
        },
        {
          artist_name: 'Bring Me The Horizon',
          artist_img: 'https://i.scdn.co/image/12801c8e109f2a11b3f6b181f730eb008d1ad12d'
          spotify_id: '1Ffb6ejR6Fe5IamqA5oRUF'
        },
        {
          artist_name: 'Aesop Rock',
          artist_img: 'https://i.scdn.co/image/d190e645f63fb0430299aa85600afeeb432130e0'
          spotify: '2fSaE6BXtQy0x7R7v9IOmZ'
        },
        {
          artist_name: 'Stevie Wonder',
          artist_img: 'https://i.scdn.co/image/c59faacbed7aa770266bad048660810eca204108'
          spotify_id: '7guDJrEfX3qb6FEbdPA5qi'
        },
      ]);
    });
};
