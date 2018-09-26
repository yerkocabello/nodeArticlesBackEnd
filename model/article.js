let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = Schema({
    createdAt: string,
    title: string,
    url: string,
    author: string,
    points: number,
    story_text: string,
    comment_text: string,
    num_comments: string,
    story_id: number,
    story_title: string,
    story_url: string,
    parent_id: number,
    created_at_i: string,
    _tags: Array,
    objectId: string,
    _highlightResult: {
        author: {
            value: string,
            matchLevel: string,
            fullyHighlighted: boolean,
            matchedWords: Array
        },
        comment_text: {
            value: string,
            matchLevel: string,
            matchedWords: Array
        },
        story_title: {
            value: string,
            matchLevel: string,
            matchedWords: Array
        }
    }
});

module.exports= mongoose.model('Article', ArticleSchema);