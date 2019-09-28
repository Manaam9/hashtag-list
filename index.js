/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var tagsList = tweet.split(' ');
    var tags = []
    for (i=0; i<tagsList.length; i++){
        if (tagsList[i][0]=='#'){
            tag = tagsList[i].split('#');
            tags.push(tag[1]);
        }
    }
    return tags
};
