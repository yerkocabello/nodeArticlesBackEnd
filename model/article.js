let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = Schema({
    created_at: String,
    title: String,
    url: String,
    author: String,
    points: Number,
    story_text: String,
    comment_text: String,
    num_comments: String,
    story_id: Number,
    story_title: String,
    story_url: String,
    parent_id: Number,
    created_at_i: String,
    _tags: Array,
    objectId: String,
    _highlightResult: {
        author: {
            value: String,
            matchLevel: String,
            fullyHighlighted: Boolean,
            matchedWords: Array
        },
        comment_text: {
            value: String,
            matchLevel: String,
            matchedWords: Array
        },
        story_title: {
            value: String,
            matchLevel: String,
            matchedWords: Array
        }
    }
});

module.exports= mongoose.model('Article', ArticleSchema);