import './SearchBar.css';

import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(searchTerm);
	};

	return (
		<div className="search-bar">
			<form onSubmit={handleSubmit}>
				<label>Enter Search Term</label>
				<input
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
			</form>
		</div>
		
	);
};

export default SearchBar;