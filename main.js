const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/users', (req, res) => {
    queries.getAllUsers().then(users => res.json(users))
})
app.get('/artists', (req, res) => {
    queries.getAllArtist().then(artists => res.json(artists))
})
app.get('/joins', (req, res) => {
    queries.getAllJoins().then(joins => res.json(joins))
})
app.get('/users/:id', (req, res) => {
    queries.getUsersById(req.params.id).then(user => res.status(200).send(user))
})
app.get('/artists/:id', (req, res) => {
    queries.getArtistsById(req.params.id).then(artist => res.status(200).send(artist))
})
app.get('/joins/:id', (req, res) => {
    queries.getJoinsByUserId(req.params.id).then(user_music => res.status(200).send(user_music))
})
app.post('/users', (req, res) => {
    queries.createUser(req.body).then(user => res.json(user))
    res.send(req.body);
})
app.post('/artists', (req, res) => {
    queries.createArtist(req.body).then(artist => res.json(artist))
})
app.post('/joins', (req, res) => {
    queries.createJoin(req.body).then(join => res.json(join))
})
app.put('/users/:id', (req, res) => {
    queries.updateUser(req.params.id, req.body).then(updateUser => res.json(updateUser))
})
app.delete('/users/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(res.sendStatus(204))
})
app.delete('/joins/:id', (req, res) => {
    queries.deleteJoin(req.params.id).then(res.sendStatus(204))
})
app.get('/match', (req, res) => {
    queries.getAllJoins().then(allJoinUserInfo => {
        var currentUserId = req.query.user_id
        queries.getJoinsByUserId(currentUserId).then(currentUserInfo => {
            var currentUserFavArtist = []
            currentUserInfo.forEach(function (info) {
                currentUserFavArtist.push(info.spotify_id);
            }); 
            // console.log(currentUserFavArtist)

            // allJoinUserInfo.map(info => {
            //     if (info.user_id !== Number(currentUserId)) {
            //         // console.log(info);
            //         var obj = {}
            //         for (var i = 1; i <= 4; i++) {
            //             info.map(user => {
            //                 if (user.user_id === i) {
            //                     console.log(user.user_id)
            //                 }
            //             })
            //         }
            //         console.log(arr);
            //     }
            // })

            //allJoinUserInfo.map(function (info) {
                
                // var arr = info
                // if (info.user_id !== Number(currentUserId)) {
                //     // console.log(info);
                //     var obj = {}
                //     for (var i = 1; i <= 4; i++) {
                //         arr.map(user => {
                //             if (user.user_id === i) {
                                
                //             }
                //         })
                //     }
                //     console.log(arr);
                // }
            //})
        })
    })
})

app.listen(port)