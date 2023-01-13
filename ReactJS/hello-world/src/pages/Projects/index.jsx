import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PagesModel from "components/PagesModel";
import ReactMarkdown from "react-markdown";
import './Projects.css'
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";

export default function Projects() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if (!post) {
    return <NotFound />
  }
  
  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route index element={
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
      } />
      </Route>
    </Routes>
  )
}
