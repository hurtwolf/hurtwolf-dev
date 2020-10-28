import Link from 'next/link'
import Moment from 'moment'

export default function bloglist({posts}) {
  return (
    posts.map((post) => {
      return(
        <div key={post._id} className="post">
          <Link href={`/blog/${encodeURIComponent(post.slug)}`} className="text-blue-600">
            <a className="text-blue-600 hover:underline text-lg mr-4">
              {post.title}
            </a>
          </Link>
          <span className="text-gray-500">{Moment(post.published_at).fromNow()}</span>
        </div>
      )
    })
  )
}