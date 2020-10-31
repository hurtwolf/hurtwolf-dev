import Lodash from 'lodash'
import Moment from 'moment'

export default function BlogPost({post}) {
  return (
    <div className="post">
      <div className="flex post-header">
        {post.thumbnail ? <img className="mr-4 rounded-full w-12 h-12" alt={post.title} src={post.thumbnail} /> : null}
        <div>
          <p className="text-lg font-semibold">{post.title}</p>
          <p className="text-gray-500 text-sm">{Moment(post.created_at).fromNow()} by {post.metadata.author.title}</p>
        </div>
      </div>
      <div className="post-content mt-6 bg-gradient-to-b from-gray-200 py-4 px-6 rounded text-gray-700" dangerouslySetInnerHTML={{ __html: Lodash.unescape(post.content) }}></div>
    </div>
  )
}