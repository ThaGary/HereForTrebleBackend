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

            let newArr = [];

            allJoinUserInfo.map(function(info) {
                if (info.user_id !== Number(currentUserId)) {
                    newArr.push({
                        "id": info.user_id,
                        "spotify_id": [info.spotify_id]
                    })
                }
            })

            var output = [];

            newArr.forEach(function(item) {
                var existing = output.filter(function(v, i) {
                    return v.id == item.id;
                });
                if (existing.length) {
                    var existingIndex = output.indexOf(existing[0]);
                    output[existingIndex].spotify_id = output[existingIndex].spotify_id.concat(item.spotify_id);
                } else {
                    if (typeof item.spotify_id == 'string')
                    item.spotify_id = [item.spotify_id];
                    output.push(item);
                }
            });

            function compare(arr1, arr2) {
                const finalArray = [];
                arr1.forEach((e1)=>arr2.forEach((e2)=>
                    {
                        if(e1 === e2) {
                            finalArray.push(e1)
                        }
                    }
                ));
                return (finalArray.length/arr1.length)*100;
            }

            output.forEach((person) => {
                const percentage = compare(currentUserFavArtist, person.spotify_id)
                person["percentage"] = percentage;
            })

            const result = output.map((person) => {
                let winner = {
                    id: '',
                    percentage: 0
                };
                winner['id'] = person.id;
                winner['percentage'] = person.percentage;
                return winner;
            });
        
            res.send(result);
            
        })
    })
})

app.listen(port)