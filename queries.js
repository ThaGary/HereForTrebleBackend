const db = require('./database-connections');
module.exports = {
    getAllUsers() {
        return db('users')
    },
    getAllArtist() {
        return db('music')
    },
    getAllJoins() {
        return db('user_music')
    },
    getUsersById(id) {
        return db('users')
            .where('id', id)
            .first()
    },
    getArtistsById(id) {
        return db('music')
            .where('id', id)
            .first()
    },
    getJoinsById(id) {
        return db('user_music')
            .where('id', id)
            .first()
    },
    createUser(newUser) {
        return db('users')
            .insert(newUser)
            .returning('*')
    },
    createArtist(newArtist) {
        return db('music')
            .insert(newArtist)
            .returning('*')
    },
    createJoin(newJoin) {
        return db('user_music')
            .insert(newJoin)
            .returning('*')
    },
    updateUser(id, user) {
        return db('users')
            .where('id', id)
            .update(user)
            .returning('*')
    },
    deleteUser(id) {
        return db('users')
            .where('id', id)
            .del()
    },
    deleteJoin(id) {
        return db('user_music')
            .where('id', id)
            .del()
    }
}