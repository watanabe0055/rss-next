import Typography from "@/atoms/Typography";
import Tag from "@/atoms/tag";
import dayjs from "dayjs";
import { Article, ArticleOG } from "@/pages/qiita/type";
import Link from "next/link";
import Image from "next/image";

interface RssProps {
  data: Array<ArticleOG> | null | undefined;
}

const Rss = ({ data }: RssProps) => {
  if (!data) return <div>No data available</div>;

  return (
    <div className="flex flex-wrap justify-center items-start w-full">
      {data.map((item: ArticleOG, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          className="bg-customYellowLight rounded-lg shadow-md p-6 my-5 mx-2 w-[440px]"
        >
          <div className="flex justify-center">
            <Image
              src={item.ogImage}
              alt={`${item.title}のOGP画像`}
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="flex flex-wrap items-center mt-4 gap-4">
            {item.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex}>
                <Typography text={tag.name} />
              </Tag>
            ))}
          </div>
          <div className="mt-2">
            <Typography
              text={dayjs(item.created_at).format("YYYY-MM-DD")}
              size="s"
              color="gray"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Rss;
