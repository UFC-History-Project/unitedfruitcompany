import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getPageCount, getPostsForDisplay, getTags } from "../../lib/posts";
import { ListedPost } from "../../lib/types";
import { WideContainer } from "../../components/Container";
import PostList from "../../components/PostList";
import usePageQuery from "../../hooks/usePageQuery";
import { parseAsInteger, useQueryState } from "nuqs";
import PagePicker from "../../components/PagePicker";

interface Props {
  posts: ListedPost[];
  pageCount: number;
  tags: string[];
}

const Biographies: NextPage<Props> = ({ posts, pageCount, tags }) => {
  const [, setPage] = useQueryState<number>("page", parseAsInteger);
  const postsToShow = usePageQuery("biographies", posts);

  return (
    <WideContainer>
      <Head>
        <title>Biographies - United Fruit Company</title>
        <meta
          name="description"
          content="Biographies related to the United Fruit Company."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList label="Biographies" posts={postsToShow} tags={tags} />
      <PagePicker pageCount={pageCount} setPage={setPage} />
    </WideContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay("Biographies");
  const pageCount = await getPageCount("Biographies");
  const tags = await getTags("Biographies");
  return {
    props: {
      posts,
      pageCount,
      tags,
    },
  };
};

export default Biographies;
