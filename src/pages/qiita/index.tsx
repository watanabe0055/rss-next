import axios from "axios";
import { load } from "cheerio";
import { Article, ArticleOG } from "./type";
import Rss from "@/component/rss";

type QiitaPageData = ArticleOG[];

const QiitaPage = ({ data }: { data: QiitaPageData }) => {
  return (
    <>
      <Rss data={data} />
    </>
  );
};

export default QiitaPage;

export async function getServerSideProps() {
  const qiitaUrl = "https://qiita.com/api/v2/items";

  const res = await axios.get(qiitaUrl);
  const data = res.data;

  // 各アイテムのURLからOGP画像を取得
  const ogImagePromises = data.map(async (item: Article) => {
    const response = await axios.get(item.url);
    const html = response.data;
    const $ = load(html);
    const ogImage = $('meta[property="og:image"]').attr("content");
    return ogImage;
  });

  // すべてのプロミスが解決されるのを待つ
  const ogImages = await Promise.all(ogImagePromises);

  // 各アイテムにOGP画像のURLを追加
  data.forEach((item: ArticleOG, index: number) => {
    item.ogImage = ogImages[index];
  });

  return { props: { data: data } };
}
