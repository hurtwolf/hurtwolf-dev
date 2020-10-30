import Lodash from 'lodash'
import Moment from 'moment'

export default function BlogPost({post}) {
  return (
    <div className="post">
      <div className="post-header">
        <p className="text-xl font-semibold">{post.title}</p>
        <span className="text-gray-500 text-sm">{Moment(post.created_at).fromNow()} by {post.metadata.author.title}</span>
      </div>
      <div className="post-content mt-4 bg-gradient-to-r from-gray-200 py-4 px-6 rounded" dangerouslySetInnerHTML={{ __html: Lodash.unescape(post.content) }}></div>
    </div>
  )
}