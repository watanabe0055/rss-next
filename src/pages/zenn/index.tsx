import axios from "axios";
import type { Data } from "@/types/zenn";
import ZennRss from "@/component/ZennRss";

type Props = {
  data: Data;
};

const ZennPage = ({ data }: Props) => {
  return <ZennRss articles={data.articles} />;
};

export default ZennPage;

export async function getServerSideProps() {
  const zennUrl = "https://zenn.dev/api/articles?order=latest";

  const res = await axios.get(zennUrl);
  const data = res.data;

  return { props: { data: data } };
}
