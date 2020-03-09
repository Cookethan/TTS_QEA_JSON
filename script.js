function signIn(){
    let name = document.getElementById("userName").value;
    getUser(name);
    document.getElementById("postTitle").style.display = "block";
    document.getElementById("albumTitle").style.display = "block";

}

function getUser(name) {
    console.log("find user function")
    var userId = 0;

    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(function(response) {
            return response.json();
        }
        ).then(function(users){
            let results = users;

            let info = {};
            for (let i = 0; i < results.length; i++){
                if (results[i].name == name){
                    document.getElementById("title").innerHTML = name;
                    info = results[i];
                    id = info.id;
                    getPosts(id);
                    getAlbums(id);
                    break;
                } else {
                    document.getElementById("title").innerHTML = "User not found";
                }
            }
        }).catch(function(error){
            console.log(error);
        })
}

function getAlbums(id) {
	fetch("https://jsonplaceholder.typicode.com/users/" + id + "/albums/")
		.then(function(response) {
			return response.json();
		}).then(function(albums) {
		let results = albums;
		let list = document.getElementById("albums");
			results.forEach(function(album){
				let x = document.createElement('li');
				list.appendChild(x);
				x.innerHTML = album.title;
			});
		}).catch(function(err) {
		console.error(err);
	});
}

function getPosts(id) {
	fetch("https://jsonplaceholder.typicode.com/users/" + id + "/posts/")
		.then(function(response) {
			return response.json();
		}).then(function(posts) {
		let results = posts;
		var list = document.getElementById("posts");
			results.forEach(function(post){
				let x = document.createElement('li');
				list.appendChild(x);
				x.innerHTML =  post.title;
			});
		}).catch(function(err) {
		console.error(err);
	});
}
