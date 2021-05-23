var messages = [];

var welcomeKeys = ["hi", "slt", "ahla", "bonjour", "hello"]
var actionsKeys = ["produit", "buy", "acheter", "info"]



var sendBtn = document.getElementById("sendMessageBtn");
var messagesList = document.getElementById("messages");

var steps = 0;



function checkForWelcomeMessage(message) {
    var messageDecomposed = message.split(" ");

    for (let i = 0; i < messageDecomposed.length; i++) {
        const element = messageDecomposed[i];
        if (welcomeKeys.indexOf(element) != -1) {
            return true;
        }

    }

    return false;
}

function checkForActionMessage(message) {
    var messageDecomposed = message.split(" ");

    for (let i = 0; i < messageDecomposed.length; i++) {
        const element = messageDecomposed[i];
        if (actionsKeys.indexOf(element) != -1) {
            return true;
        }

    }

    return false;
}





function updateUI() {
    messagesList.innerHTML = "";

    messages.map((m) => {
        var msgHTML = "<li>" + m.message + "</li>";

        messagesList.innerHTML = messagesList.innerHTML + msgHTML;
    })
}


function responde() {
    console.log("responding");
    const lastMessageFromUser = messages[(messages.length - 1)].message;



    if (steps == 0) {
        // test welcome message
        if (checkForWelcomeMessage(lastMessageFromUser)) {
            messages.push({
                message: "welcome back, how can i help you !"
            })


            console.log(messages);
            steps++;

            updateUI();
        } else {
            messages.push({
                message: "Sorry, i can't undrestand !"
            })


            console.log(messages);

            updateUI();
        }
    }else if(steps == 1){
            // test welcome message
    if (checkForActionMessage(lastMessageFromUser)) {
        messages.push({
            message:'to check out product click this link <a href="#">visit</a>'
        })


        console.log(messages);
        steps ++;

        updateUI();
    }else{
        messages.push({
            message:"Sorry, i can't undrestand !"
        })


        console.log(messages);

        updateUI();
    }
    }



}




sendBtn.addEventListener('click', () => {
    const message = document.getElementById("message-input").value;
    messages.push({
        message: message
    })

    document.getElementById("message-input").value = '';

    updateUI();

    responde();
})









