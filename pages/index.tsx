import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriterScript from '../components/TypeWriterScript'
import Secret from '../components/Secret'
import { fetchPosts } from '../lib/posts'
import { Post } from '../lib/types'
import Link from 'next/link'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>United Fruit Company</title>
        <meta name="description" content="The United Fruit Company, 1899-1970." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <TypeWriterScript text={'United Fruit Company'} />
        </h1>

        <p className={styles.description}>
          <TypeWriterScript text={'Coming soon!'} />
        </p>

        <h3>Here are some cool upcoming posts:</h3>
        <ul>
          {posts.map(post => <li key={post.ID}><Link href={`/posts/${post.slug}`}>{ post.title }</Link></li>)}
        </ul>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2><TypeWriterScript text={'Documentation →'} /></h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2><TypeWriterScript text={'Learn →'} /></h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2><TypeWriterScript text={'Examples →'} /></h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2><TypeWriterScript text={'Deploy →'} /></h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Site created by <a href="https://camdenmecklem.com">Camden Mecklem</a>.</p>
        <p>Content created by HIS394/HNR331, proctored by Dr. Jonathan T. Reynolds.</p>
        <Secret
          child={<span>🍌</span>}
        />
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts()
  return {
    props: {
      posts
    }
  }
}

export default Home
