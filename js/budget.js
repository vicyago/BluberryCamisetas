displayDetail();
imgListen();
colorInput();

function displayDetail() {
    let checkInput = document.querySelectorAll(".checkBox");
    checkInput.forEach(function (btnChk) {
        btnChk.addEventListener("change", function () {
            let checkLi = btnChk.closest("li");
            let checkDiv = checkLi.querySelector(".sectionDetalhes");
            if (btnChk.checked) {
                checkDiv.style.display = "grid";
                makeRequirements(checkDiv, 0);
            } else {
                makeRequirements(checkDiv, 1);
                checkDiv.style.display = "none";
            }
            hideDivForm();
        });
    });
}
function hideDivForm() {
    let grabDivForm = document.querySelector(".formularioHolder");
    let showHideDivForm = document.querySelector("#imgsArray");
    let checkLength = showHideDivForm.querySelectorAll(
        "input[type=checkbox]:checked"
    ).length;
    if (checkLength > 0) {
        grabDivForm.style.display = "block";
    } else {
        grabDivForm.style.display = "none";
    }
}
function imgListen() {
    let imgProductHolder = document.querySelector(".divProducts");
    let imgsArray = imgProductHolder.querySelectorAll("img");
    imgsArray.forEach(function (imgObj) {
        imgObj.addEventListener("click", function () {
            imgConfirm(imgObj);
        });
    });
    function imgConfirm(imgObj) {
        let checkLi = imgObj.closest("li");
        let nextInput = checkLi.querySelector("input");
        nextInput.click();
    }
}
function makeRequirements(checkLi, inx){
    let requiredFields = checkLi.querySelectorAll(".required");
    if(inx==0){
        requiredFields.forEach(function(item, index){
                item.required = true;
            }
        )
    }
    else{
           requiredFields.forEach(function(item, index){
                item.required = false;
            }
        )
    }

}
function colorInput() {
    let textColorInputs = document.querySelectorAll("input[name=colorName]");
    let selectColorInput = document.querySelectorAll(".corPeca");

    function checkColorInput(currentInput, inputChoose) {
        let colorSelector = currentInput.parentElement.querySelector(".corPeca");
        let colorTextInput = currentInput.parentElement.querySelector(
            "input[name=colorName]"
        );
        let disabledInput;
        let chooserArray = [
            [true, "not-allowed", 0.5],
            [false, "pointer", 1],
        ];
        if (inputChoose === "text") {
            disabledInput = colorSelector;
        } else {
            disabledInput = colorTextInput;
        }

        if (currentInput.value !== "") {
            disableInput(0);
        } else {
            disableInput(1);
        }
        function disableInput(arrayInx) {
            disabledInput.disabled = chooserArray[arrayInx][0];
            disabledInput.style.cursor = chooserArray[arrayInx][1];
            disabledInput.style.opacity = chooserArray[arrayInx][2];
        }
    }
    function addListeners() {
        textColorInputs.forEach(function (currentInput) {
            currentInput.oninput = function () {
                checkColorInput(currentInput, "text");
            };
        });
        selectColorInput.forEach(function (currentInput) {
            currentInput.onchange = function () {
                checkColorInput(currentInput, "select");
            };
        });
    }

    addListeners();

}

window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);
