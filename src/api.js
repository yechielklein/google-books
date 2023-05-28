import axios from 'axios';

const searchBooks = async (searchTerm) => {
	const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
		params: {
			q: searchTerm
		}
	});

	return response.data.items;
};

export default searchBooks;