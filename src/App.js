import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "./APIs/useFetchJobs";
import Job from "./screens/Job";
import SkeletonLoading from "./screens/SkeletonLoading";
import { GoMarkGithub } from "react-icons/go";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchJobs();

  return (
    <div>
      <Container className="my-4">
        <header className="btn">
          <h1 className=" text-light mb-4 ">
            <GoMarkGithub />
            {"  "} GitJOBS
          </h1>
        </header>

        {loading && (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        )}

        {error && <h1>ERROR{error}. Try refreshing the page.</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </Container>
    </div>
  );
}

export default App;
