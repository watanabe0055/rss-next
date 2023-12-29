import Typography from "@/atoms/Typography";
import Tag from "@/atoms/tag";
import dayjs from "dayjs";
import { ArticleOG } from "@/types/qiita";
import Link from "next/link";
import Image from "next/image";

interface RssProps {
  data: Array<ArticleOG> | null | undefined;
}

const QiitaComponent = ({ data }: RssProps) => {
  if (!data) return <div>No data available</div>;

  return (
    <div className="flex w-full flex-wrap items-start justify-center">
      {data.map((item: ArticleOG, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          className="mx-2 my-5 w-[440px] rounded-lg bg-customYellowLight p-6 shadow-md"
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
          <div className="mt-4 flex flex-wrap items-center gap-4">
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

export default QiitaComponent;
