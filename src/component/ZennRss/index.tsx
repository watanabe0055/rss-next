import Typography from "@/atoms/Typography";
import { Article } from "@/types/zenn";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

type Props = {
  articles: Array<Article>;
};

const ZennRss = ({ articles }: Props) => {
  return (
    <div className="flex w-full flex-wrap items-start justify-center">
      {articles.map((article: Article) => {
        return (
          <Link
            key={article.id}
            href={`https://zenn.dev/${article.user.id}/articles/${article.slug}`}
            target="_blank"
          >
            <div className="mx-2 my-5 h-[180px] w-[440px] rounded-lg bg-customYellowLight p-6 shadow-md ">
              <Typography text={article.title} />
              <Typography
                text={dayjs(article.published_at).format("YYYY-MM-DD")}
                size="s"
                color="gray"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ZennRss;
