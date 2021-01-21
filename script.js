function fetchDo(user){
    fetch('https://api.github.com/users/' + user)
    .then((resp1) => resp1.json()) 
    .then((resp2) => 
    console.log(resp2.login + 
        "\n" +  resp2.avatar_url + "\n" + resp2.bio + "\n" +resp2.url ))
    .catch((error) => console.error("Error:" + "Информация о пользователе не доступна" ));


    fetch('https://api.github.com/users/' + user)
    .then((resp1) => resp1.json()) 
    .then(resp2 => {let img = document.createElement('img');
    img.src = resp2.avatar_url
    document.body.innerHTML= `${resp2.login} <br> <br> ${resp2.bio} <br><br>`;
    document.body.append(img)})
    .catch((error) => console.error("Error:" + "Информация о пользователе не доступна"));
}

// fetchDo('Serzhunya');
fetchDo('defunkt');