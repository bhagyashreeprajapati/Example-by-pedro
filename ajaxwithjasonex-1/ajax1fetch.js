// AJAX - Asynchronous JavaScript And XML
// AJAJ - Asynchronous JavaScript And JSON

console.log("Start");
// request to grab data from a remote API using the Fetch API
let url = "https://jsonplaceholder.typicode.com/posts";
let elTablePosts = document.querySelector("#tablePosts tbody");
let elTotalPosts = document.querySelector("#totalNumberPosts");
let btGetPosts = document.querySelector("#btGetPosts");
let elLoader = document.querySelector("#loader");

function processPosts(posts) {
    // console.log(posts);
    for (let post of posts) {
        elTablePosts.innerHTML += `<tr>
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        </tr>`;
    }
    elTotalPosts.textContent = posts.length;
    document.querySelector("#tablePosts").style.display = "table";
}
function getPosts() {
    elLoader.style.visibility = "visible";
    // asynchronous code - fetch returns a promise
    fetch(url)
        // .then(response => console.log(response));
        // .then(response => response.json());
        .then(response => {
            if (response.ok) { // status code of 200
                // Promise fulfilled
                return response.json();
            } else {
                // Promise rejected
                // console.log(response.status);
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
                // switch (response.status) {
                //     case 404:
                //     default:
                // }
            }
        })
        // .then(function(posts) {
        //     console.log(posts);
        // })
        // .then(posts => {
        //     console.log(posts);
        // })
        .then((posts) => {
            processPosts(posts);
            elLoader.style.visibility = "hidden";
        })
        .catch(error => {
            alert("The following error occurred: " + error);
            elLoader.style.visibility = "hidden";
        })
}
btGetPosts.addEventListener("click", getPosts);


console.log("End");