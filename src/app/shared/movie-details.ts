export interface FeaturedMoviesData {
    Search?: FeaturedMovieDetails[];
    Error?: string;
    Response: string;
}

export interface FeaturedMovieDetails {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    imdbID: string;
}

export interface MovieList extends FeaturedMovieDetails {
    Awards: string;
    Plot: string;
    Rated: string;
    Genre: string;
    Director: string;
    Actors: string;
    BoxOffice?: string;
    Country: string;
    DVD: string;
    Language: string;
    Metascore: string;
    Production?: string;
    Ratings: RatingsArray[];
    Released: string;
    Runtime: string;
    Website?: string;
    imdbRating: string;
    imdbVotes: string;
    Writer: string;
    Error?: string;
    Response: string;
}

export interface RatingsArray {
    Source: string;
    Value: string;
}

export interface FeaturedMovieIds {
    movieId: string;
}

export enum PlotLength {
    FULL = 'full',
    SHORT = 'short'
}

export enum DisplayMode {
    FEATUREMODE = 'isFeatureMode',
    SEARCHMODE = 'isSearchMode'
}