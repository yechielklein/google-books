import './BookShow.css';

const BookShow = ({ book }) => (
	<div className="book">
		<img src={book.imageLinks.thumbnail} alt="cover" />
		<h2>{book.title}</h2>
		<h4>{book.authors.join(', ')}</h4>
		<p>{book.description}</p>
	</div>
);

export default BookShow;