import Head from 'next/head'
import { API, CMS_NAME } from '../../lib/constants'
import BlogPost from '../../components/blogpost'

function Post({post}){
  return (
    <>
    <Head>
      <title>{post.title} - {CMS_NAME}</title>
      <meta property="og:title" content={post.title} key="title" />
    </Head>
    <BlogPost post={post}/>
    </>
  )
}

export async function getServerSideProps({ params: { slug } }) {
  const options = {
    type: 'posts',
    read_key: process.env.READ_KEY,
    limit: 20,
    props: ['slug', 'title', 'content', '_id', 'published_at', 'metadata', 'created_at']
  }
  const res = await fetch(`${API.POST}/${slug}?pretty=true&hide_metafields=true&read_key=${options.read_key}&props=${options.props}`)
  const post_json = await res.json()
  const post = post_json.object

  return {
    props: {
      post,
    },
  }
}

export default Post