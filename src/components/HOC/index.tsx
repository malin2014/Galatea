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
 * Higher-order component (HOC) that handles common query states: loading, error, and no data.
 *
 * This HOC wraps a component and displays a loading indicator, error message with refetch option,
 * or a no data message based on the provided props. If data is present and there are no errors,
 * it renders the wrapped component with all received props.
 *
 * @template P - The props type of the wrapped component.
 * @param WrappedComponent - The React component to wrap.
 * @returns A new component that manages loading, error, and no data states.
 *
 * @example
 * const MyComponentWithQuery = withQuery(MyComponent);
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
