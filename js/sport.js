const fetchUsers = () => {
  axios
    .get(
      "http://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=29ed0cd962944169bb89b29fa6126349"
    )
    .then(response => {
      const headline = response.data.articles;

      console.log(headline);
      for (let i = 0; i < headline.length; i++) {
        const news = document.getElementById("headlines");
        const title = `
           <div class="card" style="width:364px; margin:20px;">
                <div class="img-style" style="width:364px; height: 224px;">
                <img src="${headline[i].urlToImage}" style="height: inherit" class="card-img-top" alt="...">
               </div>
                <div class="card-body"> 
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${headline[i].description}</li>
                  <li class="list-group-item">${headline[i].content}</li>
                  <li class="list-group-item" ><a  href="${headline[i].url}">${headline[i].title}</a></li>
                </ul>
                </div>
              </div>`;

        const postion = "beforeend";
        news.insertAdjacentHTML(postion, title);
      }
    })
    .catch(error => console.error(error));
};

fetchUsers();
