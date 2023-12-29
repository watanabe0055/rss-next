import Typography from "@/atoms/Typography";
import { ArticleOg } from "@/types/zenn";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

type Props = {
  articles: Array<ArticleOg>;
};

const ZennRss = ({ articles }: Props) => {
  return (
    <div className="flex w-full flex-wrap items-start justify-center">
      {articles.map((article: ArticleOg) => (
        <div
          key={article.id}
          className="mx-2 my-5 w-[440px] overflow-hidden rounded-lg bg-orange-200 p-4 shadow-md"
        >
          <Link
            href={`https://zenn.dev/${article.user.username}/articles/${article.slug}`}
            target="_blank"
          >
            {article.ogImage && (
              <Image
                src={article.ogImage}
                alt={`${article.title}のOGP画像`}
                width={400}
                height={200}
                layout="responsive"
              />
            )}
            <div className="p-6">
              <Typography
                text={dayjs(article.published_at).format("YYYY-MM-DD")}
                size="s"
                color="gray"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ZennRss;
