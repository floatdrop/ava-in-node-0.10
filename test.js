var test = require('ava');

test('works!', function (t) {
    require('./index.js').then(function () {
        t.end();
    });
});
