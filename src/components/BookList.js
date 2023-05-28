import BookShow from './BookShow';

const BookList = ({ books }) => {
	const renderedBooks = books.map(book => (
		<BookShow
			book={book.volumeInfo}
			key={book.id}
		/>
	));

	return <div>{renderedBooks}</div>;
};

export default BookList;