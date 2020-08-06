import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonLoading = () => {
  return (
    <div>
      <SkeletonTheme color="" highlightColor="">
        <p>
          <Skeleton height={40} />
          <Skeleton count={8} />
          <Skeleton width={50} count={2} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoading;
