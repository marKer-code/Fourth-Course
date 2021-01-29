function click1(elem) {
    var t = document.getElementById("imgg");
    switch (elem.id) {
        case 'bigGreen':
            t.src = "../Media/bigGreen.jpg";
            break;
        case 'mediumGreen':
            t.src = "../Media/mediumGreen.jpg";
            break;
        case 'smallGreen':
            t.src = "../Media/smallGreen.jpg";
            break;
        case 'neutral':
            t.src = "../Media/neutral.jpg";
            break;
        case 'smallRed':
            t.src = "../Media/smallRed.jpg";
            break;
        case 'mediumRed':
            t.src = "../Media/mediumRed.jpg";
            break;
        case 'bigRed':
            t.src = "../Media/bigRed.jpg";
            break;
    }
}

var counter = 0;
var result = 0;
var test = [
    {
        question: "Every opinion should be respected even if it's not supported by facts or arguments",
        answer: [
            {
                bigGreen: 10,
                mediumGreen: 8.34,
                smallGreen: 6.68,
                neutral: 5,
                smallRed: 3.32,
                mediumRed: 1.66,
                bigRed: 0
            }
        ]
    },
    {
        question: "You consider yourself more practical than creative",
        answer: [
            {
                bigGreen: 10,
                mediumGreen: 8.34,
                smallGreen: 6.68,
                neutral: 5,
                smallRed: 3.32,
                mediumRed: 1.66,
                bigRed: 0
            }
        ]
    },
    {
        question: "Being organized is more important to you than being able to adapt",
        answer: [
            {
                bigGreen: 1.66,
                mediumGreen: 3.32,
                smallGreen: 5,
                neutral: 6.68,
                smallRed: 8.34,
                mediumRed: 10,
                bigRed: 8.34
            }
        ]
    },
    {
        question: "People can rarely upset you",
        answer: [
            {
                bigGreen: 10,
                mediumGreen: 8.34,
                smallGreen: 6.68,
                neutral: 5,
                smallRed: 3.32,
                mediumRed: 1.66,
                bigRed: 0
            }
        ]
    },
    {
        question: "You often envy others",
        answer: [
            {
                bigGreen: 0,
                mediumGreen: 1.66,
                smallGreen: 3.32,
                neutral: 5,
                smallRed: 6.68,
                mediumRed: 8.34,
                bigRed: 10
            }
        ]
    },
    {
        question: "Being able to develop and follow a plan is the most important part of any project",
        answer: [
            {
                bigGreen: 0,
                mediumGreen: 1.66,
                smallGreen: 3.32,
                neutral: 5,
                smallRed: 6.68,
                mediumRed: 8.34,
                bigRed: 10
            }
        ]
    },
    {
        question: "You rarely get carried away with fantasies and ideas",
        answer: [
            {
                bigGreen: 10,
                mediumGreen: 8.34,
                smallGreen: 6.68,
                neutral: 5,
                smallRed: 3.32,
                mediumRed: 1.66,
                bigRed: 0
            }
        ]
    },
    {
        question: "As a parent, you'd more like to see your child kind than smart",
        answer: [
            {
                bigGreen: 10,
                mediumGreen: 8.34,
                smallGreen: 6.68,
                neutral: 5,
                smallRed: 3.32,
                mediumRed: 1.66,
                bigRed: 0
            }
        ]
    },
    {
        question: "You are more of a natural improviser than a careful planner",
        answer: [
            {
                bigGreen: 8.34,
                mediumGreen: 10,
                smallGreen: 8.34,
                neutral: 6.68,
                smallRed: 5,
                mediumRed: 3.32,
                bigRed: 1.66
            }
        ]
    },
    {
        question: "Your emotions control you more than you control them",
        answer: [
            {
                bigGreen: 0,
                mediumGreen: 1.66,
                smallGreen: 3.32,
                neutral: 5,
                smallRed: 6.68,
                mediumRed: 8.34,
                bigRed: 10
            }
        ]
    },
    {
        question: "When it comes to making important decisions for you logic tends to be more important than feelings",
        answer: [
            {
                bigGreen: 8.34,
                mediumGreen: 10,
                smallGreen: 8.34,
                neutral: 6.68,
                smallRed: 5,
                mediumRed: 3.32,
                bigRed: 1.66
            }
        ]
    },
    {
        question: "If your friend is upset about something, you're more likely to support him emotionally, rather than advise you on how to solve the problem",
        answer: [
            {
                bigGreen: 0,
                mediumGreen: 1.66,
                smallGreen: 3.32,
                neutral: 5,
                smallRed: 6.68,
                mediumRed: 8.34,
                bigRed: 10
            }
        ]
    },
    {
        question: "You think other people like you better than being an influential person",
        answer: [
            {
                bigGreen: 0,
                mediumGreen: 1.66,
                smallGreen: 3.32,
                neutral: 5,
                smallRed: 6.68,
                mediumRed: 8.34,
                bigRed: 10
            }
        ]
    },
    {
        question: "You have always been interested in non-traditional and multi-meaning things, for example, in books, art or cinema",
        answer: [
            {
                bigGreen: 10,
                mediumGreen: 8.34,
                smallGreen: 6.68,
                neutral: 5,
                smallRed: 3.32,
                mediumRed: 1.66,
                bigRed: 0
            }
        ]
    }
]
function click2(elem) {
    var img = document.getElementById("imgg");
    if (elem.value != "Restart") {
        if (img.src.split("/Media/")[1] == 'answer.jpg') {
            alert("Choose a response");
            return;
        }
        else {
            var evaluate = 0;
            switch (img.src.split("/Media/")[1]) {
                case 'bigGreen.jpg':
                    evaluate += test[counter].answer[0].bigGreen;
                    break;
                case 'mediumGreen.jpg':
                    evaluate += test[counter].answer[0].mediumGreen;
                    break;
                case 'smallGreen.jpg':
                    evaluate += test[counter].answer[0].smallGreen;
                    break;
                case 'neutral.jpg':
                    evaluate += test[counter].answer[0].neutral;
                    break;
                case 'smallRed.jpg':
                    evaluate += test[counter].answer[0].smallRed;
                    break;
                case 'mediumRed.jpg':
                    evaluate += test[counter].answer[0].mediumRed;
                    break;
                case 'bigRed.jpg':
                    evaluate += test[counter].answer[0].bigRed;
                    break;
            }
            result += evaluate;
            counter++;
            var i = counter + 1;
            document.getElementsByTagName("h3")[0].innerText = "Question " + i;
            if (counter != 14)
                document.getElementsByTagName("h5")[0].innerText = test[counter].question;
            img.src = "../Media/answer.jpg";
            if (counter == 13)
                document.getElementById("green").innerText = "Result";
            if (counter == 14) {
                document.getElementById("green").value = "Restart";
                document.getElementsByTagName("h3")[0].innerText = "Your opinion coincides with my";
                document.getElementsByTagName("h5")[0].innerText = 100 * result / 140 + " %";
                document.getElementById("imgg").style.visibility = "hidden";
            }
        }
    }
    else {
        document.getElementById("green").value = "Next";
        counter = 0;
        result = 0;
        document.getElementsByTagName("h3")[0].innerText = "Question 1";
        document.getElementsByTagName("h5")[0].innerText = test[0].question;
        img.src = "../Media/answer.jpg";
        document.getElementById("imgg").style.visibility = "visible";
    }
}