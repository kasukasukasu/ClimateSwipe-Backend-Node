const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: String,
    body: {content1: String,
    content2: String,
    rating: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);


/*Json example:

{"title": "Täytä juomapullosi", "content":
{"content1": "Käytä täytettävää juomapulloa vähentääksesi muovijätettä.",
"content2": "Voit ostaa täytettävän juomapullon tai käyttää uudelleen tyhjiä muovipulloja. Ollessasi liikeessä mukana kulkeva vesipullo säästää usein myös rahaa, kun voit täyttää pullosi sen sijaan, että ostaisit juomaa.",
"rating": "10"}} */

