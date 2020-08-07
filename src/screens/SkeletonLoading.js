import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Spinner } from "react-bootstrap";

const SkeletonLoading = () => {

  return (
    <div>
      <SkeletonTheme color="#4b5d67" highlightColor="#87556f">
        <Spinner animation="border" variant="light" />

        <p>
          <Skeleton width={150} />
          <Skeleton count={6} />
          <Skeleton width={50} />
        </p>
        <p>
          <Skeleton width={150} />
          <Skeleton count={6} />
          <Skeleton width={50} />
        </p>
        <p>
          <Skeleton width={150} />
          <Skeleton count={6} />
          <Skeleton width={50} />
        </p>
        <p>
          <Skeleton width={150} />
          <Skeleton count={6} />
          <Skeleton width={50} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoading;
