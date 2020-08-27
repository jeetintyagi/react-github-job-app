import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Card, Badge, Button } from "react-bootstrap";
import { FcViewDetails } from "react-icons/fc";
import { GoLocation } from "react-icons/go";

const SkeletonLoading = () => {
  return (
    <div>
      <SkeletonTheme color="#4b5d67" highlightColor="#6b8590">
        <Card className="mb-3 bg-dark">
          <Card.Body>
            <>
              <Card.Title>
                <Skeleton width={200} />
              </Card.Title>
              <Badge variant="secondary" className="mr-2">
                <GoLocation />
                {"  "}
                Location
              </Badge>
              <Skeleton count={6} />
              <br />
              <Button variant="primary">
                View Details <FcViewDetails />
              </Button>
            </>
          </Card.Body>
        </Card>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoading;
