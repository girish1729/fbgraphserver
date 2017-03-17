var graph = require('fbgraph');


access_token =
    'AAYTL9OsqT8BAMOAFZCsPGr46lci9bRdeJ2kvfYQF0EqU67axEd3dOIMtVvQfffNpGUk3O0WB3onZAO62V7KqjWXLZBEPaaroqFHjz8ODARARUkDESfhbIA7hw6PZAKqcFc5qoJnaxtWE893a09ctZB0nwo28hWZC0GsM8U1gd16BuJIniB7xOuSVyT0Xq0g0ZD';

graph.setAccessToken(access_token);

var options = {
    timeout: 3000,
    pool: {
        maxSockets: Infinity
    },
    headers: {
        connection: "keep-alive"
    }
};

graph.setOptions(options);
 
ourfriends = [];

function recfriends(next, cb) {
    graph.get(next, function (err, response) {
        if (err) {
            cb(true);
        }
        for (var i = 0; i < response.data.length; i++) {
            ourfriends.push(response.data[i].id);
        }
        if (response.paging && response.paging.next) {
            recfriends(response.paging.next, cb);
        } else {
            cb(false);
            return;
        }
    });
}


    recfriends("/me/friends", cb);


