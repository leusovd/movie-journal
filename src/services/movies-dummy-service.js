import { MoviewModel } from "../models";

export default class MoviesDummyService {
    constructor() {
        this.posterBaseUrl = 'https://image.tmdb.org/t/p/original';
        
        this.movies = [
            new MoviewModel(
                547016,
                "The Old Guard",
                `${this.posterBaseUrl}/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg`,
                "2020",
                "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
                7.4
            ),
            new MoviewModel(
                516486,
                "Greyhound",
                `${this.posterBaseUrl}/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg`,
                "2020",
                "A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.",
                7.4
            ),
            new MoviewModel(
                587792,
                "Palm Springs",
                `${this.posterBaseUrl}/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg`,
                "2020",
                "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
                7.7
            ),
            new MoviewModel(
                714375,
                "Fatal Affair",
                `${this.posterBaseUrl}/lMbUiOZh8wELqY63v3ou54yTvEG.jpg`,
                "2020",
                "Ellie tries to mend her marriage with her husband Marcus after a brief encounter with an old friend, David, only to find that David is more dangerous and unstable than she'd realized.",
                5.1
            ),
            new MoviewModel(
                475557,
                "Joker",
                `${this.posterBaseUrl}/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg`,
                "2019",
                "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                8.2
            ),
            new MoviewModel(
                547016,
                "The Old Guard",
                `${this.posterBaseUrl}/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg`,
                "2020",
                "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
                7.4
            ),
            new MoviewModel(
                516486,
                "Greyhound",
                `${this.posterBaseUrl}/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg`,
                "2020",
                "A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.",
                7.4
            ),
            new MoviewModel(
                587792,
                "Palm Springs",
                `${this.posterBaseUrl}/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg`,
                "2020",
                "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
                7.7
            ),
            new MoviewModel(
                714375,
                "Fatal Affair",
                `${this.posterBaseUrl}/lMbUiOZh8wELqY63v3ou54yTvEG.jpg`,
                "2020",
                "Ellie tries to mend her marriage with her husband Marcus after a brief encounter with an old friend, David, only to find that David is more dangerous and unstable than she'd realized.",
                5.1
            ),
            new MoviewModel(
                475557,
                "Joker",
                `${this.posterBaseUrl}/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg`,
                "2019",
                "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                8.2
            ),
        ];
        this.similar = [
            new MoviewModel(
                547016,
                "The Old Guard",
                `${this.posterBaseUrl}/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg`,
                "2020",
                "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
                7.4
            ),
            new MoviewModel(
                516486,
                "Greyhound",
                `${this.posterBaseUrl}/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg`,
                "2020",
                "A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.",
                7.4
            ),
            new MoviewModel(
                587792,
                "Palm Springs",
                `${this.posterBaseUrl}/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg`,
                "2020",
                "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
                7.7
            ),
            new MoviewModel(
                714375,
                "Fatal Affair",
                `${this.posterBaseUrl}/lMbUiOZh8wELqY63v3ou54yTvEG.jpg`,
                "2020",
                "Ellie tries to mend her marriage with her husband Marcus after a brief encounter with an old friend, David, only to find that David is more dangerous and unstable than she'd realized.",
                5.1
            ),
            new MoviewModel(
                475557,
                "Joker",
                `${this.posterBaseUrl}/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg`,
                "2019",
                "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                8.2
            ),
        ];
    }

    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.95) {
                //     reject('Something bad happens');
                // } else {
                //     resolve(this.movies);
                // }
                resolve(this.movies);
            }, 700);
        });
    }

    getById(moviewId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.95) {
                    reject('Something bad happens');
                } else {
                    resolve(this.movies.find(({ id }) => id === moviewId));
                }
            }, 700);
        });
    }

    getAllSimilar() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.95) {
                    reject('Something bad happens');
                } else {
                    resolve(this.similar);
                }
            }, 700);
        });
    }
}
