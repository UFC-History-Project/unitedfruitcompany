import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import PostContent from '../../components/Post'
import { getPostData, getSlugs } from '../../lib/posts'
import { DisplayedPost, PostParams } from '../../lib/types'
import Container from '../../components/Container'

interface Props {
  postData: DisplayedPost
}

const ResourceView: NextPage<Props> = ({ postData }) => {
  return (
    <div>
      <Head>
        <title>{`${postData.title} - United Fruit Company`}</title>
        <meta name="description" content={postData.excerpt.replace(/(<([^>]+)>)/ig, '')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <PostContent post={postData} />
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs('Resources')
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as PostParams

  const postData = await getPostData(slug)
  return {
    props: {
      postData
    }
  }
}

export default ResourceView