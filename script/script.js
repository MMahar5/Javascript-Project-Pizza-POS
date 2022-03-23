// const app = { 
//     baseURL: 'http://jsonplaceholder.typicode.com/',
//     init: () => {
//         document.addEventListener('DOMContentLoaded', app.load);
//         console.log('HTML loaded');
//     },
//     load: () => {
//         //the page had finished loading its HTML
//         app.showLoading();
//         app.getData();
//     },
//     showLoading: () => {
//         let ul = document.querySelector('.list');
//         let li = document.createElement('li');
//         li.textContent = 'Loading...';
//         li.className = 'loading-list';
//         ul.appendChild(li);
//     },
//     getData: () => {
//         //based on the current page...
//         let page = document.body.id;
//         switch (page) {
//             case 'page1':
//                 app.getPage1();
//                 //add custom event listeners for posts page
//                 break;
//             case 'page2':
//                 app.getPage2();
//                 //add custom event listeners for users page
//                 break;
//             //case 'photos':
//                 // app.authorize();
//                 //app.getPhotos();
//                 //add other custom functions
//             default:
//                 app.somethingElse();
//         }
//     },
//     getPosts: () => {
//         let url = app.baseURL + 'page1';
//         let req = new Request(url, {
//             method: 'GET',
//             mode: 'cors'
//         });
//         fetch(req)
//             .then(resp => resp.json())
//             .then(app.showPosts)
//             .catch(app.err);
//     },
//     getUsers: () => {
//         let url = app.baseURL + 'page2';
//         let req = new Request(url, {
//             method: 'GET',
//             mode: 'cors'
//         });
//         fetch(req)
//             .then(resp => resp.json())
//             .then(app.showUsers)
//             .catch(app.err);
//     },
//     somethingElse: () => {
//         //another function that runs based on a different page loading
//     },
//     getPage1: (posts) => {
//         //remove the loading li
//         let ul = document.querySelector('.list');
//         ul.innerHTML = '';
//         // create a list with the post data
//         let df = document.createDocumentFragment();
//         //console.log(posts);
//         posts.forEach(post => {
//             let li = document.createElement('li');
//             li.textContent = post.title;
//             li.setAttribute('data-id', post.id);
//             df.appendChild(li);
//         });
//         ul.appendChild(df);
//     },
//     getPage2: (users) => {
//         //remove the loading li
//         let ul = document.querySelector('.list');
//         ul.innerHTML = '';
//         // create a list with the user data
//         let df = document.createDocumentFragment();
//         console.log(users);
//         users.forEach(user => {
//             let li = document.createElement('li');
//             li.textContent = user.email;
//             li.setAttribute('data-id', user.id);
//             df.appendChild(li);
//         });
//         ul.appendChild(df);
//     },
//     err: (err) => {
//         //remove the loading li
//         let ul = document.querySelector('.list');
//         ul.innerHTML = '';
//         //display the error to the user
//         let div = document.createElement('div');
//         div.className = 'error msg';
//         div.textContent = err.message;
//         document.body.appendChild(div);
//         setTimeout(() => {
//             let div = document.querySelector('.error.msg');
//             div.parentElement.removeChild(div);
//         }, 3000);
//     }
// }
// app.init();





const btnAdd = document.getElementById("btn-spPizza");
let txtArea = document.getElementById("txtArea");
const rb = document.querySelectorAll('input[name=rdBtn]');
//let txtArea2 = document.getElementbyId("txtArea2");

//$('txtArea2').load('index.html');


txtArea.innerHTML = "Welcome to Matt's Pizzeria\n\n";

//txtArea2.innerHTML = "Hello I am text area2";


btnAdd.addEventListener('click', function ()
    {
        txtArea.innerText = "";
        txtArea.innerHTML += "Welcome to Matt's Pizzeria\n\nOrder# 00001\n\n";

        let spe = document.getElementsByName("pep");
        let sm = document.getElementById("sm");
        let md = document.getElementById("md");
        let lg = document.getElementById("lg");
        let xl = document.getElementById("xl");
        let size;
        let count = 0;
        let price = 0;

        txtArea.innerHTML += "Specialties:\n\n"

        for(let i = 0; i < spe.length; i++)
        {
            if(spe[i].checked)
            {
                txtArea.innerHTML += spe[i].value +"\n";
                count++;
            }

        }

        txtArea.innerHTML += "\nSpecialty Size:  "

        for (const rBtn of rb)
        {
            if(rBtn.checked)
            {
                
                txtArea.innerHTML += rBtn.value;
                
                if(rBtn.value == "Small"){
                    txtArea.innerHTML += "    $10.00 x "+count;
                    price += 10 * count;
                }else if(rBtn.value == "Medium"){
                    txtArea.innerHTML += "    $13.00 x "+count;
                    price += 13 * count;
                }else if(rBtn.value == "Large"){
                    price += 15 * count;
                    txtArea.innerHTML += "    $15.00 x "+count;
                }else if(rBtn.value == "Extra Large"){
                    price += 17.5 * count;
                    txtArea.innerHTML += "    $17.50 x "+count;
                }
            }

        }
        
        
        //sessionStorage.setItem("txt", txtArea.value.toString());
        
        //const txt =  document.getElementById('txtArea').value;
        localStorage.setItem(txt, price);
        alert(price);
    });

    // function testJS() {
    //     var b = document.getElementById('txtArea').value,
    //         url = 'file:///V:/RTC/CSI-140/Javascript%20Project-Pizza%20POS/index.html' + encodeURIComponent(b);
    
    //     document.location.href = url;
    // }




    //sessionStorage.setItem("txtArea", txtArea.innerHTML.value);
    // function retrieveData (){
    //     const txt =  document.getElementById('txtArea').value;
    //     localStorage.setItem("txt", txt);

    //     return;
    // }

    function postwith (to,p) {
        var myForm = document.createElement("form");
        myForm.method="post" ;
        myForm.action = to ;
        for (var k in p) {
          var myInput = document.createElement("input") ;
          myInput.setAttribute("name", k) ;
          myInput.setAttribute("value", p[k]);
          myForm.appendChild(myInput) ;
        }
        document.body.appendChild(myForm) ;
        myForm.submit() ;
        document.body.removeChild(myForm) ;
      }



 
 

  

    // function copyToClipboard(txtArea) {
    //     const elem = document.createElement("txtArea");
    //     elem.value = txtArea;
    //     document.body.appendChild(elem);
    //     elem.select();
    //     document.execCommand("txtArea2");
    //     document.body.removeChild(elem);
    //  }






