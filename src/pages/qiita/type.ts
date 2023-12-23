export interface Article {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: null | GroupType;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
  page_views_count: number | null;
  team_membership: null | TeamMembershipType;
  organization_url_name: null | string;
  slide: boolean;
}

/**
 * OG込みの記事情報
 */
export interface ArticleOG {
  rendered_body: string;
  body: string;
  coediting: boolean;
  ogImage: string;
  comments_count: number;
  created_at: string;
  group: null | GroupType;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
  page_views_count: number | null;
  team_membership: null | TeamMembershipType;
  organization_url_name: null | string;
  slide: boolean;
}

interface Tag {
  name: string;
  versions: string[];
}

interface User {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
}

// 以下のタイプはJSONには含まれていないが、`null`が指定されている場合に使用できる
// 実際のAPIの仕様に基づいて、適切な型定義を追加する必要がある
interface GroupType {
  // Groupに関するプロパティ
}

interface TeamMembershipType {
  // TeamMembershipに関するプロパティ
}
