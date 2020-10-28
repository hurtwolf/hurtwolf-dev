import Lodash from 'lodash'
import Moment from 'moment'

export default function bloglist({post}) {
  const unescapeHTML = Lodash.unescape(post.content)
  return (
    <div className="post">
      <p className="text-lg font-semibold">{post.title}</p>
      <span className="text-gray-500">{Moment(post.published_at).fromNow()}</span>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: unescapeHTML }}/>
    </div>
  )
}