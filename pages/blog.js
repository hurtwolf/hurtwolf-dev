import Head from 'next/head'
import { API, CMS_NAME, CMS_SLOGAN } from '../lib/constants'
import BlogList from '../components/bloglist'

function Blog({posts}){
  return (
    <>
    <Head>
      <title>{CMS_NAME} - {CMS_SLOGAN}</title>
      <meta property="og:title" content={CMS_NAME} key="title" />
    </Head>
    <div>
      <p className="mb-3">Blog</p>
      <BlogList posts={posts}/>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const options = {
    type: 'posts',
    read_key: process.env.READ_KEY,
    limit: 20,
    props: ['slug', 'title', 'content', '_id', 'published_at']
  }
  const res = await fetch(`${API.POSTS}?pretty=true&hide_metafields=true&type=${options.type}&read_key=${options.read_key}&limit=${options.limit}&props=${options.props}`)
  const posts_json = await res.json()
  const posts = posts_json.objects

  return {
    props: {
      posts,
    },
  }
}

export default Blog