const target = document.querySelector("#app");

fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-08-11&sortBy=popularity&apiKey=d70ec7078e5b401e83ae4a9ab0ab9fdd')
    .then(function(response) {
        return response.json()
    }).then(function newsData(obj) {
        let newsArray = obj.articles;
        console.log(newsArray);
        console.log(typeof newsArray);
        document.getElementById("app").innerHTML = (newsArray.map(news =>
            `<div>
            <div><img src="${news.urlToImage}"/></div>
            <div> <h2>${news.title} </h2></div>
            <div> <p>${news.description}</p></div>
            <div> <h5> Author : ${news.author}</h5></div>
        </div>`
        ).join(''));
    })