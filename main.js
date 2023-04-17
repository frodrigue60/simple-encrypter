const input = document.querySelector("#input");
const span = document.querySelector("#span");
const emptyMessage = document.querySelector("#emptymessage");
const message = document.querySelector("#message");
let vocals = ["a", "e", "i", "o", "u"];

function encrypt() {
  if (input.value != "") {
    emptyMessage.classList.add("hidden");
    message.classList.remove("hidden");
  }
  console.log("initial text:" + input.value);
  let text = input.value.toLowerCase();
  console.log("to lower case: " + text);
  let arr = text.split(" ");
  console.log("text to array:" + arr);
  let encrypted = arr.map(function (elemento) {
    let reemplazos = {
      a: 'eos',
      e: 'sia',
      i: 'oma',
      o: 'lia',
      u: 'iso'
    };

    return elemento.replace(/[aeiou]/g, (vocal) => {
      return reemplazos[vocal];
    });
  });
  console.log("replaced characters: " + encrypted);

  let new_string = encrypted.join(" ")
  console.log("new string: " + new_string);
  span.innerHTML = new_string;
}
function decrypt() {
  const suprA = /eos/gi;
  const suprE = /sia/gi;
  const suprI = /oma/gi;
  const suprO = /lia/gi;
  const suprU = /iso/gi;
  if (input.value != "") {
    emptyMessage.classList.add("hidden");
    message.classList.remove("hidden");
  }
  console.log("initial text:" + input.value);
  let text = input.value.toLowerCase();
  console.log("to lower case: " + text);
  let new_string = text
    .replace(suprA, "a")
    .replace(suprE, "e")
    .replace(suprI, "i")
    .replace(suprO, "o")
    .replace(suprU, "u");
  console.log("string decrypted: "+new_string);

  span.innerHTML = new_string;
}
function toClipboard() {
  let targetText = document.querySelector("#span");
  console.log("text to clipboard: " + targetText.innerHTML);
  navigator.clipboard.writeText(targetText.innerHTML);
}