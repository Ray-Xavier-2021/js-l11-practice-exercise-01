// //Exercise #1
// /*Skills practiced: fetch(), async/await syntax, .json(), function expression, innerHTML, for…of loop, createElement(), append()*/

//Variables
const randomFolks = document.querySelector(".random-peeps");


// //Declare async function

 const getData = async function () {
    const usersRequest = await fetch('https://randomuser.me/api?results=5');
    const data = await usersRequest.json();

    //console.log(data);

    const usersResults = data.results;
    displayUsers(usersResults);
};

 getData();

//Display users function
const displayUsers = function (usersResults) {
    
    //Clear randomFolks element
    randomFolks.innerHTML = "";

    for (const user of usersResults) {
        const name = user.name.first;
        const country = user.location.country;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
        `;
    randomFolks.append(userDiv);
  }

};


