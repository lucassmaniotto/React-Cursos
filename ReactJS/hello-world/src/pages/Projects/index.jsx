import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PagesModel from "components/PagesModel";
import ReactMarkdown from "react-markdown";
import './Projects.css'

export default function Projects() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if (!post) {
    return (
      <PagesModel
        title="Ops! Post não existente."
      >
      </PagesModel>
    )
  }
  
  return (
    <PagesModel
      photoCover={`/assets/image/posts/${post.id}/cover_projects.jpg`}
      title={post.title}
    >
      <div className="page-markdown-container">
        <ReactMarkdown>
          {post.text}
        </ReactMarkdown>
      </div>
    </PagesModel>
  )
}
