const quotes = [
  "Education is not the learning of facts, but the training of the mind to think. — Albert Einstein",
  "Tell me and I forget, teach me and I may remember, involve me and I learn. — Benjamin Franklin",
  "The beautiful thing about learning is that no one can take it away from you. — B.B. King",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
  "An investment in knowledge pays the best interest. — Benjamin Franklin",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Do not judge me by my success, judge me by how many times I fell down and got back up again. — Nelson Mandela",
  "Integrity is doing the right thing, even when no one is watching. — C.S. Lewis",
  "No act of kindness, no matter how small, is ever wasted. — Aesop",
  "Be kind whenever possible. It is always possible. — Dalai Lama"
];

let index = 0;
function showNextQuote() {
  const quoteBox = document.getElementById("quote");
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    quoteBox.innerText = quotes[index];
    quoteBox.style.opacity = 1;
    index = (index + 1) % quotes.length;
  }, 500);
}

setInterval(showNextQuote, 5000);
window.onload = showNextQuote;

