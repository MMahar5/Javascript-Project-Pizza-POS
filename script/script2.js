//let txt = sessionStorage.getItem("txt");
// window.onload = function () {
//     var url = document.location.href,
//         params = url.split('?')[1].split('&'),
//         data = {}, tmp;
//     for (var i = 0, l = params.length; i < l; i++) {
//          tmp = params[i].split('=');
//          data[tmp[0]] = tmp[1];
//     }
//     document.getElementById('txtArea2').innerHTML = data.txtArea;
// }

const txtArea2 = document.getElementById("txtArea");

//let txt2 = document.getElementById("txtArea2");
//alert(txtArea2.value.toString());
txtArea2.innerHTML = "Create Your Own\n\n";

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
    });
//const txtArea2 = localStorage.getItem('txtArea');

//document.getElementById('txtArea').innerHTML = txtArea2;
//const txtArea2 = localStorage.getItem('txtArea');

//const txtArea2 = document.getElementById("txtArea").value;

//alert(txtArea.value.toString());

//txtArea2.innerHTML == txt.value;


