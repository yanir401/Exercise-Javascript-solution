var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const bookStatus = (library) => {
  for (const key in library) {
    if (library[key].readingStatus)
      console.log(
        `${library[key].title} by ${library[key].author} is available to read ${library[key].readingStatus}`
      );
  }
};

bookStatus(library);
