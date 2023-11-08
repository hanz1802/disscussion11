//color of the day:Coral-Han Zheng and Jiatai Yang


// function challenge1(){
//     //Fetch the value of the email input
//     //see if it is checked
//     //change the email field accordingly
//     console.log("challenge1 called");
//     if(document.getElementById('subscribe').checked==true) {
//     console.log('this work');
// document.querySelector("#emailDiv").style.display='initial'}
// else{
//     document.querySelector("#emailDiv").style.display='none'
// }
// }

//add an event listener to the subscribe checkbox
// let varCheckbox = document.getElementById('subscribe');
// varCheckbox.addEventListener('click', function(){
//     //Fetch the value of the email input
//     //see if it is checked
//     //change the email field accordingly
//     console.log("challenge1 called");
//     if(varCheckbox.checked==true) {
//     console.log('this work');
// document.querySelector("#emailDiv").style.display='initial'}
// else{
//     document.querySelector("#emailDiv").style.display='none'
// }
// });

// let varCheckbox2 = document.getElementById('sameAddress');
// varCheckbox2.addEventListener('click', function(){
//     //Fetch the value of the email input
//     //see if it is checked
//     //change the email field accordingly
//     console.log("challenge2 called");
//     let billingAddress = document.getElementById('bill');
//     let homeAddress = document.getElementById('home');
    
//     if(varCheckbox2.checked==true){
//         homeAddress.value=billingAddress.value;
//         homeAddress.disabled = true;
//     }
//     else{
//         homeAddress.disabled = false;
//     }
//     console.log("bill value is"+ billingAddress.value)
//     console.log("home value is"+ homeAddress.value)
// });

//challenge 3
//Both boxes must have radio buttons selected to move on
//If one or both radio buttons isn’t selected create an alert
//Fix the broken HTML
document.getElementById('ch3form').addEventListener('submit', function(event){
    let standing = document.getElementsByName('standing');
    let gradDate = document.getElementsByName('gradDate');

    if (!isAnyRadioChecked(standing) || !isAnyRadioChecked(gradDate)) {
        event.preventDefault();
        alert('Please select an option for both class standing and anticipated graduation date.');
    }
});

function isAnyRadioChecked(radioGroup) {
    for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            return true;
        }
    }
    return false;
}