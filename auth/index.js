const mongoose = require('mongoose');
const app = require('express')();
const { connectDb } = require('./helpers/db');
const { db, port } = require('./configuration');

const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log(`started api on port: ${port}`);
        console.log(`connected to db: ${db}`);

        const PostAboutSmth = new Post({ name: 'Smth' });
        console.log(PostAboutSmth.name);
        Post.find((err, posts) => {
            console.log('posts', posts);
        })
        // PostAboutSmth.save(console.log);
        // Post.find((err, posts) => {
        //     console.log({ err, posts });
        // })
    });

}

app.get('/test', (req, resp) => resp.send('working!'));

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
