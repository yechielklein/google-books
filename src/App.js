import './App.css'

import { useState } from 'react';

import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

import searchBooks from "./api";

const App = () => {
	const [books, setBooks] = useState([]);

	const handleSubmit = async (searchTerm) => {
		const result = await searchBooks(searchTerm);
		setBooks(result);
	};
	
	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<BookList books={books} />
		</div>
	);
};

export default App;