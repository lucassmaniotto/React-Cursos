import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import ReactMarkdown from "react-markdown";

import './Projects.css'
import styles from './Projects.module.css'

import PagesModel from "components/PagesModel";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import Card from "components/Card";

export default function Projects() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if (!post) {
    return <NotFound />
  }

  const recommendedProjects = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);
  
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
          <h2 className={styles.titleOtherProjects}>Outros projetos que você pode gostar:</h2>
          <ul className={styles.recommendedProjects}>
            {recommendedProjects.map((post) => (
              <li key={post.id}>
                <Card post={post} />
              </li>
            ))}
          </ul>
        </PagesModel>
      } />
      </Route>
    </Routes>
  )
}
