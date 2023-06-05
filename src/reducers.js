const initialState = {
    movies: [
        {
            id: 1, name: 'Flowar Hu',
            image: 'https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_1280.jpg',
            description: 'A flower is the reproductive part of flowering plants. Flowers are also called the bloom or blossom of a plant.'
        },
        {
            id: 2, name: 'The Kerala Story',
            image: 'https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_1280.jpg',
            description: 'premised on the Hindutva conspiracy theory of "love jihad", and falsely claims that thousands of Hindu women from Kerala have been converted to Islam and recruited in ISIS.'
        },
        {
            id: 3, name: 'Love Me Like You Do',
            image: 'https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_1280.jpg',
            description: 'Talks about the uncontrollable feeling of falling in love and being seduced by someone'
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.payload],
            };
        case 'EDIT_MOVIE':
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id === action.payload.id) {
                        return {
                            ...movie,
                            ...action.payload.updatedMovie,
                        };
                    }
                    return movie;
                }),
            };
        case 'DELETE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
