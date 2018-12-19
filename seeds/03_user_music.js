
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_music').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_music').insert([
        {
          user_id: 1,
          spotify_id: "06HL4z0CvFAxyc27GXpf02",
        },
        {
          user_id: 2,
          spotify_id: "6vWDO969PvNqNYHIOW5v0m",
        },
        {
          user_id: 3,
          spotify_id: "1Ffb6ejR6Fe5IamqA5oRUF"
        },
        {
          user_id: 4,
          spotify_id: "2fSaE6BXtQy0x7R7v9IOmZ",
        },
        {
          user_id: 2,
          spotify_id: "06HL4z0CvFAxyc27GXpf02",
        },
        {
          user_id: 3,
          spotify_id: "6vWDO969PvNqNYHIOW5v0m",
        },
        {
          user_id: 4,
          spotify_id: "1Ffb6ejR6Fe5IamqA5oRUF"
        },
        {
          user_id: 1,
          spotify_id: "2fSaE6BXtQy0x7R7v9IOmZ",
        }
      ]);
    });
};
