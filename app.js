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

function mixTeams() {
    var getUserName = document.getElementById("userList");
    var mainFrame = document.getElementById("mainFrame");
    //console.log(getUserName.children["user"].innerHTML);
    if (getUserName.children.length > 1) {
        for (var i = getUserName.children.length - 1; i >= 0; i--) {
            var par1 = getUserName.children[i];
            var par2 = par1.children[0];
            var par3 = par2.children[0].innerHTML; // listedeki uye ismini ceker.
        }
        for (var p = mainFrame.children.length; p > 0; p--) {
            var compp = mainFrame.children[p];
            compp.remove();
        }
    } else {
        alert("Takımları dağıtmak için en az 2 üye eklenmelidir.")
    }
}