
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_music').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_music').insert([
        {
          user_id: 1,
          music_id: 1
        },
        {
          user_id: 2,
          music_id: 2
        },
        {
          user_id: 3,
          music_id: 3
        },
        {
          user_id: 4,
          music_id: 4
        },
        {
          user_id: 2,
          music_id: 1
        },
        {
          user_id: 3,
          music_id: 2
        },
        {
          user_id: 4,
          music_id: 3
        },
        {
          user_id: 1,
          music_id: 4
        }
      ]);
    });
};
