export default class MovieModel {
    constructor(id, title, posterSrc, releaseYear, overview, rate) {
        this.id = id;
        this.title = title;
        this.posterSrc = posterSrc;
        this.releaseYear = releaseYear;
        this.overview = overview;
        this.rate = rate;
    }
}