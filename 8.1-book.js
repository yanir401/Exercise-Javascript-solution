const book = {
  bookName: "It",
  author: "Stephen King",
  rating: 4.45,
  language: "English",
  genre: "Horror",
};

const bookDetails = ({ bookName, author, rating, language, genre }) => {
  return `The book "${bookName}" was written by ${author} and got a rating of ${rating}. The book was written in ${language} and the genre type of ${genre}.`;
};

console.log(bookDetails(book));
