exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (user) => {
         user.increments('id')
         user.string('first_name')
         user.string('last_name')
         user.string('email')
         user.string('password')
         user.string('avatar')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users’);
};