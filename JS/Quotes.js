const Quotes = [
    {
        quote: "아니 뗀 굴뚝에 연기나랴?",
        author: "한국 속담"
    },
    {
        quote: "노력은 배신하지 않는다.",
        author: "유명한 명언"
    },
    {
        quote: "열번 찍어 안넘어 가는 나무 없다.",
        author: "한국 속담"
    },
    {
        quote: "가는말이 고와야 오는말이 곱다",
        author: "한국 속담"
    },
    {
        quote: "1% 재능과 99%의 노력",
        author: "작자 미상"
    },
    {
        quote: "하면 된다",
        author: "류상민"
    }
]

const showQuote = document.querySelector("#quotes span:first-child");
const showAuthor = document.querySelector("#quotes span:last-child");

const todaysQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

showQuote.innerText = todaysQuote.quote;
showAuthor.innerText = todaysQuote.author;

