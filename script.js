
function validation(){

    document.getElementById("nameResult").innerHTML = "";
    document.getElementById("passResult").innerHTML = "";
    
    var name = document.getElementById("name");
    var pass = document.getElementById("pass");

    if (name.value.trim() == "" && pass.value.trim() == ""){
        //Alert untuk memberikan pop up
        alert("Please insert name and password");
        return;
    } else if (name.value.trim() == ""){
        /*Confirm adalah cara lain dalam memberi pop up, 
        pop up terdiri dari 2 button, ok dan cancel
        bisa dimasukkan logic juga spt contoh*/
        if (confirm("Please insert your name!")){
            console.log("You press OK");
        } else console.log("You press cancel");
        return;
    } else if (pass.value.trim() == ""){
        alert("Please insert password");
        return;
    }
    //Ini untuk mengaktifkan dan menonaktifkan dialog boxnya
    var x = document.getElementById("dialogBox");
    
    if (x.open == true) x.open = false; //Kalau sedang terbuka, maka ditutup saja
    else x.open = true; //Kalau blm terbuka, baru dibuka



    //Untuk menampilkan hasil dari form aja sih kalau ini
    document.getElementById("nameResult").innerHTML = "Full Name = " + name.value.trim();
    document.getElementById("passResult").innerHTML = "Password = " + pass.value.trim();
    return;
}


function usingPrompt(){
    /*prompt adalah pop up yang bisa diinput
    hasil dari input, disimpan ke variabel 
    takeName ini */
    var takeName = prompt("Insert your name");
    var txt;
    if (takeName.trim() == ""){
        txt = "No name inputted";
    } else txt = "Hello " + takeName + ", Good Morning";

    document.getElementById("changetoName").innerHTML = txt;
}
