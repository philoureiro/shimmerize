import React from "react"

interface SkeletonProps {
  isLoading: boolean
}

function withShimmerLoading<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return function ShimmerizedComponent({
    isLoading,
    className = "",
    ...props
  }: SkeletonProps & T & { className?: string }) {
    return (
      <div
        className={`skeleton-wrapper ${
          isLoading ? "skeleton-wrapper--active" : ""
        }`}
      >
        <WrappedComponent
          {...(props as T)}
          className={`${className} ${isLoading ? "skeleton__item" : ""}`}
        />
      </div>
    )
  }
}

export default withShimmerLoading
