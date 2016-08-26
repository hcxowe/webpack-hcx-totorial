require.ensure(['./data.js'],function(require){
    var data = require('./data.js');
    alert(data.author);
}, 'testData');

document.write('<h1>Hello hcxowe</h1>');
