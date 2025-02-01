let bookLibrary = [];  // Array to store the books

// Function to add a book
function addBook() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;

  if (title && author) {
    const book = { title, author };
    bookLibrary.push(book);

    // Add the book to the display
    displayBooks(bookLibrary);

    // Clear input fields
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
  } else {
    alert("Please fill out both fields.");
  }
}

// Function to display books
function displayBooks(books) {
  const bookGrid = document.getElementById('bookGrid');
  bookGrid.innerHTML = '';  // Clear the existing books

  books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    // Add book details to card
    bookCard.appendChild(title);
    bookCard.appendChild(author);

    // Append the card to the grid
    bookGrid.appendChild(bookCard);
  });
}

// Function to filter books based on the search bar input
function filterBooks() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const filteredBooks = bookLibrary.filter(book => {
    return book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
  });

  // Display the filtered books
  displayBooks(filteredBooks);
}
