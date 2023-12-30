import axios from "axios";
import type { ArticleOg, ArticleOgData, ArticleData } from "@/types/zenn";
import ZennRss from "@/component/ZennRss";
import { load } from "cheerio";

type Props = {
  data: ArticleOgData;
};

const ZennPage = ({ data }: Props) => {
  return <ZennRss articles={data.articles} />;
};

export default ZennPage;

export async function getServerSideProps() {
  const zennUrl = "https://zenn.dev/api/articles?order=latest";

  const res = await axios.get(zennUrl);
  const data: ArticleData = res.data;

  // 各アイテムのURLからOGP画像を取得
  const ogImagePromises = data.articles.map(async (article) => {
    const response = await axios.get(
      `https://zenn.dev/${article.user.id}/articles/${article.slug}`
    );
    const html = response.data;
    const $ = load(html);
    const ogImage = $('meta[property="og:image"]').attr("content");
    return ogImage;
  });

  // すべてのプロミスが解決されるのを待つ
  const ogImages = await Promise.all(ogImagePromises);

  // 各アイテムにOGP画像のURLを追加
  data.articles.forEach((article: ArticleOg, index: number) => {
    article.ogImage = ogImages[index];
  });

  return { props: { data: data } };
}
