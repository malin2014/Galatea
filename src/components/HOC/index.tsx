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
