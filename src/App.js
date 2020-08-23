import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "./APIs/useFetchJobs";
import Job from "./Screens/Job";
import SkeletonLoading from "./Screens/SkeletonLoading";
import { GoMarkGithub } from "react-icons/go";
import JobsPagination from "./Components/JobsPagination";
import SearchForm from "./Components/SearchForm";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div>
      <Container className="my-4">
        {
          <header className="btn">
            <h1 className=" text-light mb-4 ">
              <GoMarkGithub />
              {"  "} GitJOBS
            </h1>
          </header>
        }

        <SearchForm params={params} onParamChange={handleParamChange} />

        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />

        {loading && (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        )}

        {error && <h1>ERROR{error}. Try refreshing the page.</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
    </div>
  );
}

export default App;
