import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "./APIs/useFetchJobs";
import job from "./screens/job";
import SkeletonLoading from "./screens/SkeletonLoading";

function App() {
  const [params, setParams] = useState({};
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchJobs();

  return (
    <div>
      <Container>
        {loading && <SkeletonLoading />}
        {error && <h1>ERROR{error}. Try refreshing the page.</h1>}
        {jobs.map(job =>{
          return <Job key={job.id} job=job />
        })}
      </Container>
    </div>
  );
}

export default App;
