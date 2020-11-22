import Lodash from 'lodash'
import Moment from 'moment'

export default function BlogPost({post}) {
  const postType = () => {
    if(post.metadata.video){
      return <div style={{paddingTop: '56.25%'}} className="post-content mt-6 bg-gradient-to-b from-gray-200 py-4 px-4 rounded text-gray-700 relative overflow-hidden" dangerouslySetInnerHTML={{ __html: Lodash.unescape(post.content) }} />
    }
    if(post.metadata.soundcloud){
      return <div style={{paddingTop: '56.25%'}} className="post-content mt-6 bg-gradient-to-b from-gray-200 py-4 px-4 rounded text-gray-700 relative overflow-hidden" dangerouslySetInnerHTML={{ __html: Lodash.unescape(post.content) }} />
    }
    return <div className="post-content mt-6 bg-gradient-to-b from-gray-200 py-4 px-4 rounded text-gray-700 relative overflow-hidden" dangerouslySetInnerHTML={{ __html: Lodash.unescape(post.content) }} />
  }
  return (
    <div className="post">
      <div className="flex post-header">
        {post.thumbnail ? <div className="bg-cover bg-center h-12 w-12 rounded-full mr-4" style={{ backgroundImage: `url('${post.thumbnail}')` }} /> : null}
        <div>
          <p className="text-lg font-semibold">{post.title}</p>
          <p className="text-gray-500 text-sm">{Moment(post.created_at).fromNow()} by {post.metadata.author.title}</p>
        </div>
      </div>
      {postType()}
    </div>
  )
}