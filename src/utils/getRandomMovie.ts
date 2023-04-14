export const getRandomMovie: (notThisOne?: string) =>  string = (notThisOne) => {
    const movieId = Math.floor(Math.random() * (10000000 - 0 + 1) + 0).toString();

    const idPrefix = 'tt';

    if (movieId !== notThisOne) return idPrefix.concat(movieId.toString());
    return getRandomMovie(notThisOne)
};

export const getMovieForVote = () => {
    const firstId = getRandomMovie();

    return [firstId];
}