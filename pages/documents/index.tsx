import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { fetchPosts } from '../../lib/posts'
import { Post } from '../../lib/types'
import Container from '../../components/Container'
import { Header } from '../../styles/PostListings.style'
import TypewriterScript from '../../components/TypewriterScript'

interface Props {
  posts: Post[]
}

const Documents: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Documents - United Fruit Company</title>
        <meta name="description" content="Documents related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <TypewriterScript text={'Documents'} />
      </Header>
      <ul>
        {posts.map(post => <li key={post.ID}><Link href={`/documents/${post.slug}`}>{post.title}</Link></li>)}
      </ul>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts('Documents')
  return {
    props: {
      posts
    }
  }
}

export default Documents