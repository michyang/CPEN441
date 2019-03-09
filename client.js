function animateMenu(x) {

    //animate burger to X and vice versa 
    //x.classList.toggle("change");

    //change visibility of menu
    var menu = document.getElementById("menu-wrapper");
    var menu_is_visible = menu.style.visibility;
    menu_is_visible == "visible" ?  menu.style.visibility = "hidden": menu.style.visibility = "visible";
}

function hideScreens(){
    document.getElementById("login-wrapper").style.visibility = "hidden";
    document.getElementById("login-cwl-wrapper").style.visibility = "hidden";
    document.getElementById("menu-wrapper").style.visibility = "hidden";
    document.getElementById("dashboard-wrapper").style.visibility = "hidden";
    document.getElementById("new-request-wrapper").style.visibility = "hidden";
    document.getElementById("delivery-request-wrapper").style.visibility = "hidden";
    document.getElementById("add-credit-wrapper").style.visibility = "hidden";
    document.getElementById("created-requests-wrapper").style.visibility = "hidden";
    //document.getElementById("delivery-response-wrapper").style.visibility = "hidden";
    document.getElementById("accepted-deliveries-wrapper").style.visibility = "hidden";
    document.getElementById("my-request-wrapper").style.visibility = "hidden";
    document.getElementById("my-deliveries-wrapper").style.visibility = "hidden";
    document.getElementById("upload-receipt-wrapper").style.visibility = "hidden";
    document.getElementById("confirm-delivery-wrapper").style.visibility = "hidden";
    document.getElementById("my-deliveries2-wrapper").style.visibility = "hidden";
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function clearBanner(){
    if(document.getElementById("create-request") && document.getElementById("available-requests")){
        document.getElementById("create-request").remove();
        document.getElementById("available-requests").remove();
    }
    document.getElementById("banner-text").innerHTML = "";
}

function createMainBanner(){
    var available_requests = document.createElement("button");
    available_requests.setAttribute("id", "available-requests");
    available_requests.setAttribute("class", "tab-btn");
    available_requests.innerHTML = "Available Requests";
    available_requests.addEventListener('click', function(){
        hideScreens();
        document.getElementById("dashboard-wrapper").style.visibility = "visible";
        create_request.style.border = "1px solid black";
        available_requests.style.border = "none";
    })

    var create_request = document.createElement("button");
    create_request.setAttribute("id", "create-request");
    create_request.setAttribute("class", "tab-btn");
    create_request.innerHTML = "Create Request";
    create_request.style.border = "1px solid black";
    create_request.addEventListener('click', function(){
        hideScreens();
        document.getElementById("new-request-wrapper").style.visibility = "visible";
        create_request.style.border = "none";
        available_requests.style.border = "1px solid black";
    })

    document.getElementById("banner").append(available_requests);
    document.getElementById("banner").append(create_request);
}

window.onload = function () {
    //login screen go to CWL Login
    document.getElementById("cwl-btn").addEventListener('click', function(){
        document.getElementById("login-cwl-wrapper").style.visibility = "visible";
    })

    //CWL screen go to dashboard/available requests
    document.getElementById("login-btn").addEventListener('click', function(){
        hideScreens();
        document.getElementById("dashboard-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        createMainBanner();
    })

    //click delivery request
    document.getElementById("mcdonalds-request").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("delivery-request-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "Delivery Request";

    })
    //'X' delivery request and return to dashboard
    document.getElementById("X-delivery-btn").addEventListener('click', function(){
        hideScreens();
        document.getElementById("dashboard-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "";
        createMainBanner();  
    })

    //create request button
    // document.getElementById("create-request-btn").addEventListener('click', function(){
    //     hideScreens();
    //     clearBanner();
    //     document.getElementById("delivery-response-wrapper").style.visibility = "visible";
    //     document.getElementById("banner").style.visibility = "visible";
    //     document.getElementById("banner-text").innerHTML = "Request Response";
    // })

    //incentive counters
    document.getElementById("add-dollar").addEventListener('click', function(){
        var costString = document.getElementById("incentive-cost").innerHTML;
        cost = Number(costString);
        cost += 1;
        if(document.getElementById("incentive-cost").style.color == "red"){
            document.getElementById("incentive-cost").style.color = "black";
        }
        document.getElementById("incentive-cost").innerHTML = cost+'.00';
    })
    document.getElementById("sub-dollar").addEventListener('click', function(){
        var costString = document.getElementById("incentive-cost").innerHTML;
        cost = Number(costString);
        if(cost > 2){
            cost -= 1;
            document.getElementById("incentive-cost").innerHTML = cost+'.00';
        }
        else{
            document.getElementById("incentive-cost").style.color = "red";
        }
    })
    
    //My current request
    document.getElementById("current-request").addEventListener('click',function(){
        hideScreens();
        clearBanner();
        document.getElementById("my-request-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Request";
    })
    //back button to My Requests
    document.getElementById("back-myrequest-btn").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("created-requests-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Created Requests";
    })

    //My current delivery
    document.getElementById("current-delivery").addEventListener('click',function(){
        hideScreens();
        clearBanner();
        document.getElementById("my-deliveries-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Delivery";
    })
    //back button to My Deliveries
    document.getElementById("back-mydeliveries-btn").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("accepted-deliveries-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Accepted Deliveries";
    })

    //My Upload Receipt
    document.getElementById("upload-receipt-btn").addEventListener('click',function(){
        hideScreens();
        clearBanner();
        document.getElementById("upload-receipt-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "Upload Receipt";
    })
    //back button to current delivery
    document.getElementById("back-uploadreceipt-btn").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("my-deliveries-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Delivery";
    })

    //camera button
    document.getElementById("camera-btn").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("my-deliveries2-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Delivery";
    })

    document.getElementById("back-mydeliveries2-btn").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("upload-receipt-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "Upload Receipt";
    })

    //current delivery with receipt uploaded
    document.getElementById("confirm-delivery-btn").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("confirm-delivery-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "Confirm Delivery";
    })

    //confirm delivery back button
    document.getElementById("back-confirm-btn").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("my-deliveries2-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "Confirm Delivery";
    })


    /* MENU */
    document.getElementById("menu-dashboard").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("dashboard-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        createMainBanner();  
        console.log("back to dashboard");
    })

    document.getElementById("menu-add-credit").addEventListener('click',function(){
        hideScreens();
        clearBanner();
        document.getElementById("add-credit-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "Add Credit";
    })

    document.getElementById("menu-requests").addEventListener('click',function(){
        hideScreens();
        clearBanner();
        document.getElementById("created-requests-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Created Requests";
    })

    document.getElementById("menu-deliveries").addEventListener('click', function(){
        hideScreens();
        clearBanner();
        document.getElementById("accepted-deliveries-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
        document.getElementById("banner-text").innerHTML = "My Accepted Deliveries";
    })

}