import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton";

function SkeletonItem() {
  return (
    <div>
      <Skeleton
        style={{
          height: 300,
          maxWidth: 300,
          marginBottom: 20,
          borderRadius: 3,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton
          style={{
            height: 20,
            maxWidth: 200,
            borderRadius: 3,
          }}
        />
        <Skeleton
          style={{
            height: 10,
            maxWidth: 250,
            borderRadius: 3,
          }}
        />
        <Skeleton
          style={{
            height: 10,
            maxWidth: 270,
            borderRadius: 3,
          }}
        />
        <Skeleton
          style={{
            height: 10,
            maxWidth: 220,
            borderRadius: 3,
            marginBottom: 15,
          }}
        />
        <Skeleton
          style={{
            height: 20,
            maxWidth: 100,
            borderRadius: 3,
          }}
        />
      </div>
    </div>
  );
}

export default memo(SkeletonItem);
