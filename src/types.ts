export interface Player {
    birthYear: number;
    bodyshot: string;
    country: string;
    id: number;
    lastRatingValue: number;
    name: string;
    nick: string;
    photo: string;
    rankingPosition: number;
    rating: number[];
    ratingValue: number;
    surname: string;
    team: Team;
}

interface Team {
    country: string;
    id: number;
    lastRankingPosition: number;
    lastRatingValue: number;
    lastResults: Result[];
    logo: string;
    name: string;
    rankingPosition: number;
    rating: number[];
    ratingValue: number;
    winRatio: number;
}

type Result = 'W' | 'L' | 'D';

export interface ApiData {
    content: Player[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: Sort;
        unpaged: boolean;
    };
    size: number;
    sort: Sort;
    totalElements: number;
    totalPages: number;
}

interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
