import { useParams, useSearchParams } from "react-router-dom";

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>Post</h1>
      {params.id && <p>Post ID: {id}</p>}
      {qs.get("search") && <p>Search: {qs.get("search")}</p>}
    </div>
  );
};
