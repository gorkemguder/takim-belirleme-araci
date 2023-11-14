var input_text = document.getElementById("userName");
input_text.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("add").click();
    }
});

function control() {
    var userName = document.getElementById("userName").value;
    var userList = document.getElementById("userList");
    if (userName != "") {
        if (userList.children.length != 0) {
            for (var i = userList.children.length - 1; i >= 0; i--) {
                var par1 = userList.children[i];
                var par2 = par1.children[0];
                var par3 = par2.children[0].innerHTML;
                if (userName == par3) {
                    alert("Bu isim zaten listede var.");
                    return;
                }
            }
        }
        addUser();
    } else {
        alert("İsim girmediniz.");
    }
}

function addUser() {
    var userName = document.getElementById("userName").value;
    var userList = document.getElementById("userList");
    var position = document.createElement("div");
    position.className = "text-center";
    userList.appendChild(position);
    var userGroup = document.createElement("div");
    position.appendChild(userGroup);
    userGroup.className = "btn-group";
    userGroup.id = "btngroup"
    userGroup.setAttribute("role", "group");
    var addedUser = document.createElement("button");
    userGroup.appendChild(addedUser);
    addedUser.className = "btn btn-primary mt-1 w-auto";
    addedUser.innerHTML = userName;
    addedUser.id = "user";
    var removeUser = document.createElement("button");
    userGroup.appendChild(removeUser);
    removeUser.className = "btn btn-danger mt-1";
    removeUser.innerHTML = "X";
    removeUser.id = "remove";
    removeUser.onclick = function() {
        position.remove();
    };
    input_text.value = "";
}


function clearAllUser() {
    var userList = document.getElementById("userList");
    for (var x = userList.children.length - 1; x >= 0; x--) {
        var removed = userList.children[x];
        removed.remove();
    }
    input_text.value = "";
}

function createNewContainers(cv, headerText){
    var pP1 = document.getElementById("mainFrame");
    var newRow = document.createElement("div");
    var newCon = document.createElement("div");
    var conHeaderText = document.createElement("p");
    newRow.className = "row h-100 w-100 mt-1";
    if (cv == 1){
        newCon.className = "container bg-white mx-auto my-auto pt-3 pb-4 shadow p-3 mb-5 bg-white rounded pre-scrollable";
        newCon.appendChild(conHeaderText);
        conHeaderText.className = "text-center mb-0 font-weight-bold";
        conHeaderText.innerText = headerText;
        conHeaderText.id = "teamHeader";
    }
    else if (cv == 0){
        newCon.className = "container bg-white mx-auto my-auto pt-3 pb-4 shadow p-3 mb-5 bg-white rounded  text-center";
        }
    pP1.appendChild(newRow);
    newRow.appendChild(newCon);
    return newCon;
}

function printMixTeams(Array, parent) {
    for (var b = Array.length - 1; b >= 0; b--) {
        var newUser = document.createElement("p");
        newUser.innerHTML = Array[b] + "<br>";
        newUser.className = "text-center mb-0 mt-0";
        parent.appendChild(newUser);
    }
}

function mixTeams() {
    var userArr = [];
    var getUserName = document.getElementById("userList");
    var mainFrame = document.getElementById("mainFrame");
    var newButton = document.createElement("button");
    var info = document.createElement("div");

    if (getUserName.children.length > 1) {
        for (var i = getUserName.children.length - 1; i >= 0; i--) {
            var par1 = getUserName.children[i];
            var par2 = par1.children[0];
            var par3 = par2.children[0].innerHTML; // listedeki uye ismini ceker.
            userArr.push(par3);
        }

        for (var p = mainFrame.children.length - 1; p >= 0; p--) {
            if (p == 0) {
                continue;
            } else {
                var compp = mainFrame.children[p];
                compp.remove();
            }
        }

        var con1 = createNewContainers(1, "Takım-1");
        var con2 = createNewContainers(1, "Takım-2");
        var confinal = createNewContainers(0);
        userArr.sort(() => Math.random() - 0.5);
        var centerI = Math.floor(userArr.length / 2);
        var userArr1 = userArr.slice(0, centerI);
        var userArr2 = userArr.slice(centerI);
        printMixTeams(userArr1, con1);
        printMixTeams(userArr2, con2);
        newButton.className = "btn btn-primary mt-2 mb-0 w-auto";
        newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2.5 7.25a4.75 4.75 0 0 1 9.5 0 .75.75 0 0 0 1.5 0 6.25 6.25 0 1 0-6.25 6.25H12v2.146c0 .223.27.335.427.177l2.896-2.896a.25.25 0 0 0 0-.354l-2.896-2.896a.25.25 0 0 0-.427.177V12H7.25A4.75 4.75 0 0 1 2.5 7.25Z"></path></svg>' + 'Başka Takım Belirle';
        newButton.onclick = function(){location.reload();}
        confinal.appendChild(newButton);
        info.className = "text-center mb-0 mt-1 font-weight-bold"
        info.innerHTML = "Bu araç Görkem Güder tarafından programlanmıştır.";
        confinal.appendChild(info);
        
    } else {
        alert("Takımları dağıtmak için en az 2 üye eklenmelidir.")
    }
}
