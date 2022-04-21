const book1 = {
  bookName: "It",
  author: "Stephen King",
  year: 1986,
};

const book2 = {
  bookName: "The Shining",
  author: "Stephen King",
  year: 1977,
};

const bookUtils = {};

bookUtils.getFirstPublished = (book1, book2) => {
  if (book1.year < book2.year) return book1;
  return book2;
};

bookUtils.setNewEdition = (book, editionYear) => {
  book.latestEdition = editionYear;
};

bookUtils.setNewEdition(book1, 1988);

bookUtils.setLanguage = (book, language) => {
  book.language = language;
};

bookUtils.setLanguage(book1, "English");

bookUtils.setTranslation = (book, language, translator) => {
  book.translation = {
    "translation language": language,
    translator: translator,
  };
};

bookUtils.setTranslation(book1, "Hebrew", "Bibi");

bookUtils.setPublisher = (book, name, location) => {
  book.publisher = {
    name,
    location,
  };
};
bookUtils.setPublisher(book2, "Lior Ben-Ami", "Akko");

bookUtils.setPublisher(book1, "Lior Ben-Ami", "Akko");

bookUtils.isSamePublisher = (book1, book2) => {
  const condition1 = book1.publisher.name === book2.publisher.name;
  const condition2 = book1.publisher.location === book2.publisher.location;
  return condition1 && condition2;
};

bookUtils.isSamePublisher(book1, book2);
console.log(
  "🚀 ~ file: 8.3-book_utilities.js ~ line 56 ~ bookUtils.isSamePublisher(book1, book2)",
  bookUtils.isSamePublisher(book1, book2)
);
