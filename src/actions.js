export const addMovie = (movie) => {
    return {
      type: 'ADD_MOVIE',
      payload: movie,
    };
  };
  
  export const editMovie = (id, updatedMovie) => {
    return {
      type: 'EDIT_MOVIE',
      payload: {
        id,
        updatedMovie,
      },
    };
  };
  
  export const deleteMovie = (id) => {
    return {
      type: 'DELETE_MOVIE',
      payload: id,
    };
  };
  