document.getElementById("show").addEventListener("click", function() {
    document.getElementById("create-form").style.display = "block";
});

document.getElementById("show2").addEventListener("click", function() {
    document.getElementById("create-form").style.display = "block";
});

document.getElementById("close-form").addEventListener("click", function(){
    document.getElementById("create-form").style.display = "none";
    document.getElementById("hide-for-sign-in1").style.display = "block";
    document.getElementById("hide-for-sign-in2").style.display = "block";
    document.getElementById("update").textContent === "Create Account"  
    document.getElementById("update1").textContent === "Create Account";

});


document.getElementById("sign-in").addEventListener("click", function() {
    if(document.getElementById("hide-for-sign-in1").style.display = "block"){
        document.getElementById("hide-for-sign-in1").style.display = "none";
    } else{
        document.getElementById("hide-for-sign-in1").style.display = "block";
    }

    if(document.getElementById("hide-for-sign-in2").style.display = "block"){
        document.getElementById("hide-for-sign-in2").style.display = "none";
    } else{
        document.getElementById("hide-for-sign-in2").style.display = "block";
    }

    if(document.getElementById("update").textContent = "Create Account"){
        document.getElementById("update").textContent = "Sign In";
    }
    else{
        document.getElementById("update").textContent = "Create Account"  
    }
    if(document.getElementById("update1").textContent ="Create Account"){
        document.getElementById("update1").textContent = "Sign In";
    } else {
        document.getElementById("update1").textContent = "Create Account";
    }
});

