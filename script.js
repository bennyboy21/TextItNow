const checker = document.getElementById("checker")

const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting == false) {
        document.getElementById("button-Container").classList.add("open")
    } else {
        document.getElementById("button-Container").classList.remove("open")
    }
})
observer.observe(checker)

document.getElementById("profile-Image-Holder").addEventListener("click", function() {
    console.log("Profile Clicked")
}) 

var chats = 1;

document.getElementById("button-One").addEventListener("click", function() {
    if(chats == 0) {
        document.getElementById("group-Chat-Holder").style.display = "none"
        document.getElementById("chat-Icon").style.fill = "rgb(0, 132, 255)"
        document.getElementById("group-Icon").style.fill = "black"
        const chatsPage = document.getElementById("chats-Holder").style
        chatsPage.display = "flex"
        chatsPage.flexDirection = "column"
        chats = 1;
    }
})

document.getElementById("button-Two").addEventListener("click", function() {
    if(chats == 1) {
        document.getElementById("chats-Holder").style.display = "none"
        document.getElementById("chat-Icon").style.fill = "black"
        document.getElementById("group-Icon").style.fill = "rgb(0, 132, 255)"
        const chatsPage = document.getElementById("group-Chat-Holder").style
        chatsPage.display = "grid"
        chatsPage.flexDirection = "column"
        chats = 0
    }
})


document.getElementById("send-Message-Textbox").addEventListener("keyup", function(){
    const sendTextbox = document.getElementById("send-Message-Textbox").value
    if(sendTextbox != "") {
        document.getElementById("send-Icon").style.fill = "rgb(0, 132, 255)"
    } else {
        document.getElementById("send-Icon").style.fill = "rgb(100, 100, 100)"
    }
})

var typing = 1;

document.getElementById("group-Chat-Holder").addEventListener("click", function() {
    console.log("Click")
    if(typing == 1) {
        document.getElementById("all-Send-Box-Container").style.border = "10px"        
        typing = 0
    }
})

document.getElementById("all-Send-Box-Container").addEventListener("click", function() {
    if(typing == 0) {
        document.getElementById("all-Send-Box-Container").style.border = "3px solid rgb(0, 132, 200)"        
        typing = 1
    }
})

document.getElementById("search-Holder").addEventListener("click", function() {
    const chatsPage = document.getElementById("search-Page-Holder").style
    chatsPage.display = "grid"
    chatsPage.flexDirection = "column"
    var navbar = document.getElementById("button-Container");
    navbar.style.display = "none"
})

document.getElementById("close-Icon").addEventListener("click", function() {
    const chatsPage = document.getElementById("search-Page-Holder").style
    chatsPage.display = "none"
    chatsPage.flexDirection = "column"
    var navbar = document.getElementById("button-Container");
    navbar.style.display = "flex"
})











var checkUserSignIn = 0;

// setTimeout(function() {
//     if(checkUserSignIn == 0) {
//         window.location = "Welcome Page.html"
//     }
// }, 1000)


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName())
    $("#email").text(profile.getEmail())
    document.getElementById("image").setAttribute("src", profile.getImageUrl())
    checkUserSignIn = 1
    // $(".data").css("display", "block");
    // $(".g-signin2").css("display", "none");


    console.log(profile)
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // style.display = "none"
    const allowedEmailDomain = 'student.tdsb.on.ca';

    const email = profile.getEmail();
    const name = profile.getName();
    const ImageURL = profile.getImageUrl();

    // // firebase.database().ref("Users/" + name).set({
    // //     "Name": name,
    // //     "Email": email,
    // //     "Profile": ImageURL
    // // })

    if (email.split('@')[1] === allowedEmailDomain) {
        // localStorage.setItem("Name", profile.getName())
        // localStorage.setItem("Email", profile.getEmail())
        // window.location = "index.html"
    } else {
        window.location = "emailNotAccepted.html"
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location = "Welcome Page.html"
    });
}