export interface NewsResponse {
    articles: NewsArticle[],
}

export interface NewsArticle {
    author:      null;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: string;
    content:     string;
}
