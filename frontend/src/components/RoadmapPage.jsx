import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRoadmapBySlug } from "../services/api.js";

export default function RoadmapPage() {
  const { slug } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    getRoadmapBySlug(slug)
      .then((roadmap) => setResult({ slug, roadmap }))
      .catch(() => setResult({ slug, roadmap: null }));
  }, [slug]);

  const roadmap = result?.slug === slug ? result.roadmap : undefined;

  return (
    <main className="page-width">
      <Link to="/">Back to home</Link>
      {roadmap === undefined ? (
        <p>Loading roadmap...</p>
      ) : roadmap ? (
        <>
          <h1>{roadmap.title}</h1>
          <p>Category: {roadmap.category}</p>
          <p>Status: {roadmap.status}</p>
        </>
      ) : (
        <h1>Roadmap not found</h1>
      )}
    </main>
  );
}
