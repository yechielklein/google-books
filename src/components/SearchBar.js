import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(searchTerm);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>
		</form>
	);
};

export default SearchBar;