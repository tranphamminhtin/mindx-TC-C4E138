const MAX_COUNT = 3;
let countLeft = MAX_COUNT;

const guessingWords = [
  { word: "BANH MY", hint: "Đồ ăn tốt vào buổi sáng" },
  { word: "QUAN VOT", hint: "Môn thể thao phổ biến bắt nguồn từ nước Anh" },
  { word: "PYTHON", hint: "Một ngôn ngữ lập trình phổ biến" },
  { word: "TET NGUYEN DAN", hint: "Một trong những ngày lễ lớn ở Việt Nam" },
  {
    word: "TIENG TAY BAY NHA",
    hint: "Một trong những ngôn ngữ phổ biến nhất thế giới",
  },
];

// pick a word from the list
function getRandomWord() {
  const idx = Math.floor(Math.random() * guessingWords.length);
  return guessingWords[idx];
}

// generate masked text to guess
function generatePlaceholder(word) {
  let placeholder = "";
  for (let i = 0; i < word.length; i++) {
    placeholder += "*";
  }
  return placeholder;
}

// Find all position of char in word
function getCharIndicesInWord(char, word) {
  const positions = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      positions.push(i);
    }
  }
  return positions;
}

// Replace multiple character that matched the guessed char
function replaceMultipleChar(word, listIdx, guessChar) {
  let output = word;
  for (let i = 0; i < listIdx.length; i++) {
    output = setCharAt(output, listIdx[i], guessChar);
  }
  return output;
}

const guessingWord = getRandomWord();
let guessingResult = generatePlaceholder(guessingWord.word);

console.log("Gợi ý: " + guessingWord.hint);
while (guessingResult !== guessingWord.word && countLeft > 0) {
  let guessChar = prompt("Nhập 1 ký tự").toUpperCase();
  const listIdx = getCharIndicesInWord(guessChar, guessingWord.word);

  if (listIdx.length > 0) {
    console.log("Có chữ cái " + guessChar + " trong từ");
    guessingResult = replaceMultipleChar(guessingResult, listIdx, guessChar);
    console.log(guessingResult);
  } else {
    console.log("Không có chữ cái " + guessChar + " trong từ");
    console.log("Bạn còn " + countLeft + " lượt đoán");
    countLeft--;
  }
}

if (guessingResult === guessingWord.word) {
  console.log("Chúc mưng! Bạn đã đoán được từ");
} else {
  console.log("Xin lỗi! Bạn đã không tìm được từ");
}
