const db = require('./database-connection');
module.exports = {
    getAllUsers() {
        return db('users')
    },
    getAllArtist() {
        return db('music')
    },
    getAllJoins() {
        return db('user_music').innerJoin('music', 'user_music.spotify_id', 'music.spotify_id').innerJoin('users', 'user_music.user_id', 'users.id').select(
            'user_music.*',
            'users.first_name',
            'users.avatar'
        )
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
    getJoinsByUserId(id) {
        return db('user_music').where('user_id', id).innerJoin('music', 'user_music.spotify_id', 'music.spotify_id').innerJoin('users', 'user_music.user_id', 'users.id')
    },
    createUser(newUser) {
        return db('users')
            .insert(newUser)
            .returning('*')
    },
    createArtist(newArtist){
        return db('music').select()
            .where('artist_name', newArtist.artist_name)
            .then((artist) => {
                if (artist.length===0) {
                    return db('music').insert(newArtist)
                } else {
                    return artist
                }
            })
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