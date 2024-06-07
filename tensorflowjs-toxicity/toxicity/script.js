const checkfunc = async () => {
    const threshold = 0.9;
    const model = await toxicity.load(threshold);
    const button = document.querySelector(".btn");
    const loader = document.querySelector(".loader");
    const buttonText = document.querySelector("#detect");
    const result = document.querySelector("#result");

    button.onclick = function () {
        button.disabled = true;
        loader.style.display = "block";
        buttonText.textContent = "Detecting";
        const input = document.querySelector("#input_text").value;
        const sentences = [input];
        var flag = false;
        var display = "Result: ";
        model.classify(sentences).then((predictions) => {
            console.log(predictions);
            for (let i = 0; i < predictions.length; i++) {
                if (predictions[i].results[0].match) {
                    flag = true;
                    display += predictions[i].label + ", ";
                }
            }
            if (!flag) {
                display += "Not toxic";
            }
            result.textContent = display;
            button.disabled = false;
            loader.style.display = "none";
            buttonText.textContent = "Detect";
        });
    };
};
checkfunc();
