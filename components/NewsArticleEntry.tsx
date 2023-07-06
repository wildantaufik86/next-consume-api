import { NewsArticle } from "@/models/CountryModel";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

interface NewsArticleEntryProps {
  article: NewsArticle,
}

const NewsArticleEntry = ({ article : {title, description, url, urlToImage, publishedAt} } : NewsArticleEntryProps) => {
  const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined;
  return (
    <>
    <div>
        <Link href={url}>
          <div className="Card-Component">
            <img src={validImageUrl} alt="news-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="date">{publishedAt}</p>
          </div>
        </Link>
    </div>
    </>
    );
}

export default NewsArticleEntry;
