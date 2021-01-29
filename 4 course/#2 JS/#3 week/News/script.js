onload = function () { q('http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-11&sortBy=publishedAt&apiKey=0c2f9e47dbbb4954997ad59294053942'); }

function q(url2) {
    fetch(url2, {
        method: "GET"
    })
        .then(res => res.json())
        .then(json => {
            document.getElementById("news").innerHTML = ``;
            for (var i = 0; i < json.articles.length; i++) {
                document.getElementById("news").innerHTML +=
                    `<table>
                    <tr>
                        <td class="left">
                            <h4>${json.articles[i].title}</h4>
                            <h5>${json.articles[i].author}</h5>
                            <p>${json.articles[i].content}</p>
                        </td>
                        <td>
                            <img src="${json.articles[i].urlToImage}"/>
                        </td>
                    </tr>
                </table>`;
            }
        })
        .catch(err => console.log(err))
}

function click1(el) {
    switch (el.innerHTML) {
        case 'Bitcoin':
            q('http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-11&sortBy=publishedAt&apiKey=0c2f9e47dbbb4954997ad59294053942');
            break;
        case 'Business':
            q('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c2f9e47dbbb4954997ad59294053942');
            break;
        case 'Apple':
            q('http://newsapi.org/v2/everything?q=apple&from=2021-01-10&to=2021-01-10&sortBy=popularity&apiKey=0c2f9e47dbbb4954997ad59294053942');
            break;
        case 'TechCrunch':
            q('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0c2f9e47dbbb4954997ad59294053942');
            break;
        case 'Wall Street Journal':
            q('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=0c2f9e47dbbb4954997ad59294053942');
            break;
    }
}