import React from "react"
import "./Shimmerize.scss"

function withShimmerLoading(WrappedComponent: React.ElementType) {
  return function SkeletonizedComponent({
    isLoading,
    ...props
  }: { isLoading: boolean } & React.ComponentProps<typeof WrappedComponent>) {
    return isLoading ? (
      <div className="skeleton-wrapper skeleton-wrapper--active">
        <WrappedComponent className="skeleton__item" {...props} />
      </div>
    ) : (
      <WrappedComponent {...props} />
    )
  }
}

export default withShimmerLoading
