const Quotes = [
    {
        quotes: "아니 뗀 굴뚝에 연기나랴?",
        author: "한국 속담"
    },
    {
        quotes: "노력은 배신하지 않는다.",
        author: "유명한 명언"
    },
    {
        quotes: "열번 찍어 안넘어 가는 나무 없다.",
        author: "한국 속담"
    },
    {
        quotes: "가는말이 고와야 오는말이 곱다",
        author: "한국 속담"
    },
    {
        quotes: "1% 재능과 99%의 노력",
        author: "작자 미상"
    },
]

const showQuote = document.querySelector("#quotes span:first-child");
const showAuthor = document.querySelector("#quotes span:last-child");

showQuote.innerText = Quotes[Math.round(Math.random() * 4)].quotes;
showAuthor.innerText = Quotes[Math.round(Math.random() * 4)].author;


