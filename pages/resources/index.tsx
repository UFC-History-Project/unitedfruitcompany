import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import Container from '../../components/Container'
import TypewriterScript from '../../components/TypewriterScript'
import { Header } from '../../styles/PostListings.style'

interface Props {
  posts: Post[]
}

const Resources: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Resources - United Fruit Company</title>
        <meta name="description" content="Resources related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Resources'} />
      </Header>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/resources/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Resources')
  return {
    props: {
      posts
    }
  }
}

export default Resources