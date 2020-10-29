import Head from 'next/head'
import Moment from 'moment'
import Link from 'next/link'
import { API, CMS_NAME, CMS_SLOGAN } from '../lib/constants'
import BlogList from '../components/bloglist'

function Index({posts}){
  const latestPost = posts[0]
  return (
    <>
    <Head>
      <title>{CMS_NAME} - {CMS_SLOGAN}</title>
      <meta property="og:title" content={CMS_NAME} key="title" />
    </Head>
    <div key={latestPost._id} className="latest-post bg-gradient-to-r from-gray-200 py-4 px-6 mb-4 rounded">
      <Link href={`/blog/${encodeURIComponent(latestPost.slug)}`} className="text-blue-600">
        <a className="text-blue-600 hover:underline text-lg mr-4">
          {latestPost.title}
        </a>
      </Link>
      <span className="text-gray-500">{Moment(latestPost.published_at).fromNow()}</span>
    </div>
    <BlogList posts={posts}/>
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

export default Index