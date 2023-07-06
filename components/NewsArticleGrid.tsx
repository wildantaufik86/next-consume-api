import { NewsArticle } from "@/models/CountryModel";
import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticleGridProps {
  articles: NewsArticle[],
}

const NewsArticleGrid = ({ articles } : NewsArticleGridProps) => {
  return (
    <>
      {
        articles.map(article => {
          <div key={article.url}>
            <NewsArticleEntry article={article} />
          </div>
        })
      }
      </>
   );
}

export default NewsArticleGrid;
