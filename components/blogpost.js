import Lodash from 'lodash'
import Moment from 'moment'

export default function bloglist({post}) {
  const unescapeHTML = Lodash.unescape(post.content)
  return (
    <div className="post">
      <div className="post-header bg-gradient-to-r from-gray-200 py-4 px-6 rounded">
        <p className="text-lg font-semibold">{post.title}</p>
        <span className="text-gray-500">{Moment(post.published_at).fromNow()}</span>
      </div>
      <div className="post-content mt-4" dangerouslySetInnerHTML={{ __html: unescapeHTML }}></div>
    </div>
  )
}