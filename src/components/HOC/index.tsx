/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentType } from "react";
import { Loading } from "../../common/LoadingIndicator";
import { ErrorMessage } from "../../common/ErrorMessage";
import { NoData } from "../../common/NoDataMessage";

export interface WithLoadingProps {
  data?: any;
  isLoading?: boolean;
  error?: unknown;
  refetch?: () => void;
  onRemove?: (id: string) => void;
}

/**
 * Higher-order component (HOC) that handles loading, error, and empty data states for a wrapped component.
 *
 * @template P - The props type of the wrapped component.
 * @param WrappedComponent - The React component to wrap.
 * @returns A new component that renders a loading indicator, error message, or no data message
 *          based on the provided props, or renders the wrapped component if data is available.
 *
 * The returned component expects the following props in addition to the wrapped component's props:
 * - `isLoading`: boolean indicating if data is loading.
 * - `error`: error object or value indicating if an error occurred.
 * - `data`: the data to be passed to the wrapped component.
 * - `refetch`: function to refetch the data (used in error state).
 */
const withQuery = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithQueryComponent = (props: P & WithLoadingProps) => {
    const { data, isLoading, error, refetch } = props;

    if (isLoading) {
      return <Loading />;
    }

    if (!!error) {
      return <ErrorMessage refetch={refetch} />;
    }

    if (!data) {
      return <NoData />;
    }

    return <WrappedComponent {...props} />;
  };

  WithQueryComponent.displayName = "HOCWithQuery";

  return WithQueryComponent;
};

export default withQuery;
