let prizeTotal = 0;

// I will constantly update this variable if you accumulate your wins!

let readJeopardyAPI = async () => {

    let rawJeopardyData = await fetch(`jeopardy.json`);

    // console.log(rawJeopardyData);

    let data = await rawJeopardyData.json();

    // console.log(data);

    let groupedData = _.groupBy(data, 'value');

    // console.log(groupedData.$100[Math.ceil(Math.random() * groupedData.$100.length)]);

    let dollarButtons = document.querySelectorAll(".row .moneyButton");

    // console.log(dollarButtons);

    let categoryDiv = document.querySelector(".categoryDiv");
    let questionDiv = document.querySelector(".questionDiv");

    // console.log(questionDiv.classList.value);

    let submitButton = document.querySelector(".submitButton");
    let responseInput = document.querySelector(".responseInput");
    let prizeTotalDiv = document.querySelector(".prizeTotal");

    let random100 = groupedData.$100[Math.ceil(Math.random() * groupedData.$100.length)];
    let random200 = groupedData.$200[Math.ceil(Math.random() * groupedData.$200.length)];
    let random400 = groupedData.$400[Math.ceil(Math.random() * groupedData.$400.length)];
    let random600 = groupedData.$600[Math.ceil(Math.random() * groupedData.$600.length)];
    let random800 = groupedData.$800[Math.ceil(Math.random() * groupedData.$800.length)];
    let answer100 = random100.answer.toLowerCase();
    let answer200 = random200.answer.toLowerCase();
    let answer400 = random400.answer.toLowerCase();
    let answer600 = random600.answer.toLowerCase();
    let answer800 = random800.answer.toLowerCase();

    for (let i = 0; i < dollarButtons.length; i++) {

        // console.log(dollarButtons[i]);
        // console.log(dollarButtons[i].classList)

        dollarButtons[i].addEventListener("click", () => {

            if (dollarButtons[i].classList[0] === "100button") {
                // console.log(`${prizeTotal}`);
                console.log(answer100);
                categoryDiv.innerHTML = `Category: ${random100.category}`;
                questionDiv.innerHTML = `Question: ${random100.question}`;
            } else if (dollarButtons[i].classList[0] === "200button") {
                console.log(answer200);
                categoryDiv.innerHTML = `Category: ${random200.category}`;
                questionDiv.innerHTML = `Question: ${random200.question}`;
            } else if (dollarButtons[i].classList[0] === "400button") {
                console.log(answer400);
                categoryDiv.innerHTML = `Category: ${random400.category}`;
                questionDiv.innerHTML = `Question: ${random400.question}`;
            } else if (dollarButtons[i].classList[0] === "600button") {
                console.log(answer600);
                categoryDiv.innerHTML = `Category: ${random600.category}`;
                questionDiv.innerHTML = `Question: ${random600.question}`;
            } else if (dollarButtons[i].classList[0] === "800button") {
                console.log(answer800);
                categoryDiv.innerHTML = `Category: ${random800.category}`;
                questionDiv.innerHTML = `Question: ${random800.question}`;
            }


            dollarButtons[i].setAttribute("disabled", "");
            dollarButtons[i].classList.add("disabled");


            prizeTotalDiv.innerHTML = `$${prizeTotal}`;





        })

    }


    submitButton.addEventListener("click", (e) => {

        e.preventDefault();

        if (answer100 === responseInput.value) {
            prizeTotal += 100;
            console.log(`score: ${prizeTotal}`);
            prizeTotalDiv.innerHTML = `$${prizeTotal}`;
            responseInput.value = '';
            categoryDiv.innerHTML = ``;
            questionDiv.innerHTML = `Correct! you've accumulated a total of $${prizeTotal}!`;
            random100 = groupedData.$100[Math.ceil(Math.random() * groupedData.$100.length)];
            answer100 = random100.answer.toLowerCase();

        } else if (answer200 === responseInput.value) {
            prizeTotal += 200;
            console.log(`Total until now: ${prizeTotal}`);
            prizeTotalDiv.innerHTML = `$${prizeTotal}`;
            responseInput.value = '';
            categoryDiv.innerHTML = ``;
            questionDiv.innerHTML = `Correct! you've accumulated a total of $${prizeTotal}!`;
            random200 = groupedData.$200[Math.ceil(Math.random() * groupedData.$200.length)];
            answer200 = random200.answer.toLowerCase();

        } else if (answer400 === responseInput.value) {
            prizeTotal += 400;
            console.log(`Total until now: ${prizeTotal}`);
            prizeTotalDiv.innerHTML = `$${prizeTotal}`;
            responseInput.value = '';
            categoryDiv.innerHTML = ``;
            questionDiv.innerHTML = `Correct! you've accumulated a total of $${prizeTotal}!`;
            random400 = groupedData.$400[Math.ceil(Math.random() * groupedData.$400.length)];
            answer400 = random400.answer.toLowerCase();

        } else if (answer600 === responseInput.value) {
            prizeTotal += 600;
            console.log(`Total until now: ${prizeTotal}`);
            prizeTotalDiv.innerHTML = `$${prizeTotal}`;
            responseInput.value = '';
            categoryDiv.innerHTML = ``;
            questionDiv.innerHTML = `Correct! you've accumulated a total of $${prizeTotal}!`;
            random600 = groupedData.$600[Math.ceil(Math.random() * groupedData.$600.length)];
            answer600 = random600.answer.toLowerCase();

        } else if (answer800 === responseInput.value) {
            prizeTotal += 800;
            console.log(`Total until now: ${prizeTotal}`);
            prizeTotalDiv.innerHTML = `$${prizeTotal}`;
            responseInput.value = '';
            categoryDiv.innerHTML = ``;
            questionDiv.innerHTML = `Correct! you've accumulated a total of $${prizeTotal}!`;
            random800 = groupedData.$800[Math.ceil(Math.random() * groupedData.$800.length)];
            answer800 = random800.answer.toLowerCase();

        } else {
            prizeTotal = 0;
            prizeTotalDiv.innerHTML = `$${prizeTotal}`;
            // responseInput.value = '';
            categoryDiv.innerHTML = ``;
            questionDiv.innerHTML = `Sorry, wrong answer!`;


            random100 = groupedData.$100[Math.ceil(Math.random() * groupedData.$100.length)];
            random200 = groupedData.$200[Math.ceil(Math.random() * groupedData.$200.length)];
            random400 = groupedData.$400[Math.ceil(Math.random() * groupedData.$400.length)];
            random600 = groupedData.$600[Math.ceil(Math.random() * groupedData.$600.length)];
            random800 = groupedData.$800[Math.ceil(Math.random() * groupedData.$800.length)];
            answer100 = random100.answer.toLowerCase();
            answer200 = random200.answer.toLowerCase();
            answer400 = random400.answer.toLowerCase();
            answer600 = random600.answer.toLowerCase();
            answer800 = random800.answer.toLowerCase();
        }


    });

    /* if (random100.answer.toLowerCase() === submitButton.value.toLowerCase()) {
        prizeTotal += 100;
        submitButton.value = '';
        categoryDiv.innerHTML = ``;
        questionDiv.innerHTML = ``;
        alert (`Correct! you've accumulated a total of $${prizeTotal}!`);
    } else {
        prizeTotal = 0;
        submitButton.value = '';
        categoryDiv.innerHTML = ``;
        questionDiv.innerHTML = ``;
        alert(`Sorry, the correct answer is: ${random100.answer}`);
    }
    */

    // } else if (dollarButtons[i].classList[0] === "200button") {
    //     categoryDiv.innerHTML = `Category: ${random200.category}`;
    //     questionDiv.innerHTML = `Question: ${random200.question}`;
    // } else if (dollarButtons[i].classList[0] === "400button") {
    //     categoryDiv.innerHTML = `Category: ${random400.category}`;
    //     questionDiv.innerHTML = `Question: ${random400.question}`;
    // } else if (dollarButtons[i].classList[0] === "600button") {
    //     categoryDiv.innerHTML = `Category: ${random600.category}`;
    //     questionDiv.innerHTML = `Question: ${random600.question}`;
    // } else if (dollarButtons[i].classList[0] === "800button") {
    //     categoryDiv.innerHTML = `Category: ${random800.category}`;
    //     questionDiv.innerHTML = `Question: ${random800.question}`;
    // }
}


readJeopardyAPI();

