import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchPosts, getTags } from '../../lib/posts'
import { Post } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'

interface Props {
  posts: Post[],
  tags: string[]
}

const Articles: NextPage<Props> = ({ posts, tags }) => {
  return (
    <WideContainer>
      <Head>
        <title>Articles - United Fruit Company</title>
        <meta name="description" content="Articles related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        tags={tags}
        label='Articles'
        posts={posts}
      />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Articles')
  const tags = await getTags('Articles')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Articles