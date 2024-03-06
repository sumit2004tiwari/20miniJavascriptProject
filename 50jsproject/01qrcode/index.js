 var input = document.getElementById("qr-input");
 var button = document.getElementById("qr-button");
 var image = document.getElementById("qr-image");


 button.addEventListener('click' , () => {
    const finalValue = input.value;
    console.log(finalValue)

    if (finalValue.trim()==="") {
        return alert("please enter some text to generate Qr code");
    } else {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${finalValue}`
        image.alt = `Qr code for ${finalValue}`
    }
 })