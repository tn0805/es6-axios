const post = require('./myfunction') ;

axios({
    method: 'get',
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    responseType: 'json'
})
    .then(stories => {
        let data = stories.data;

        data.forEach(story => {
            let id = story;

            axios({
                method: 'GET',
                url: `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
                responseType: 'json'
            })
                .then(response => {
                    let content = response.data;
                    content.url = content.url === undefined ? "no-url" : content.url;
                    content.descendants = content.descendants === undefined ? "0" : content.descendants;
                    let html = post(content);
                    document.getElementById("stories").innerHTML += html;
                })
        })
    });
