exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_music', (user_music) => {
         user_music.increments('id')
         user_music.integer('user_id').references('id').inTable('users')
         user_music.integer('music_id').references('id').inTable('music')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_music');
};