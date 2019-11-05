var post = content => `<div class="entry card">
            <div class="card-body">
                <h4 class="card-title"><a href="${content.url}"><div style="color:darkslategray">${content.title}</div></a></h1>
                <div class="card-text">
                <p>The story's score: <strong>${content.score}</strong>, post by: <strong>${content.by}.</strong></p>
                <span>${content.descendants} comments.</span>
                </div>
            </div>
        </div>`;


        module.exports = post;
