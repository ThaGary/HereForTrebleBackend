exports.up = function(knex, Promise) {
    return knex.schema.createTable('music', (music) => {
         music.increments('id')
         music.string('artist_name')
         music.string('artist_img')
         music.string('spotify_id').unique()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('music');
};