let pURL = "https://my-json-server.typicode.com/grayTingle/fakeAPI/listOptions";

let objNav = document.querySelector("#mainMenu");

//use the api
fetch(pURL)
.then (response => response.json())
.then (info => {

    console.log(info);

    info.forEach(menu => {
        let menuHTML = document.createElement("a");
        let colorMenu = "btn-" + menu.color;
    
        menuHTML.setAttribute("class", "btn " + colorMenu);
        menuHTML.setAttribute("href-", menu.url);
        menuHTML.textContent = menu.dspMenu;
        objNav.appendChild(menuHTML)
    });


})
.catch (error => console.log(error))

//finding people

//document.querySelector('#btnSee').onclick = () => {

// fetch("")
// .then(resp => resp.json())
// .then(data => {
//  document.querySelector("#userName").textContent = data.user;
//   document.querySelector("dspUser").textContent = data.user
// })

//}