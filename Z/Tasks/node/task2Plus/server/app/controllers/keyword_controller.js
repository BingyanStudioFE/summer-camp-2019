const Keyword = require('./../models/keyword');
const uuid = require('uuid/v1');
//genKeyword
const genKeyword = async (ctx, next, keyword) => {
    const word = await Keyword.findOne({
        word: keyword
    });
    if (word) {
        await Keyword.findOneAndUpdate({
            id: word.id,
        }, {
            $inc: {count: 1}
        });
    } else {
        const keyWord = {
            id: uuid(),
            word: keyword
        };
        await Keyword.create(keyWord);
    }
};
module.exports = {
    genKeyword
};
