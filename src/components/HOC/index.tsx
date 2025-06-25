import React from "react";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Loading } from "./Loading";
import { NoData } from "./NoData";
import { Error } from "./Error";

export interface IQueryProps<T> {
  data: T | undefined;
  isError: unknown;
  isLoading: boolean;
  isFetching: boolean;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<T, unknown>>;
}

export function withQuery<T>(
  WrappedComponent: React.ComponentType<{ data: T }>
) {
  const QueryHandler = ({
    data,
    isError,
    isLoading,
    isFetching,
    refetch,
  }: IQueryProps<T>) => {
    if (isLoading || isFetching) {
      return <Loading />;
    }

    if (isError) {
      return <Error refetch={refetch} />;
    }

    if (!data) {
      return <NoData />;
    }

    return <WrappedComponent data={data} />;
  };

  return QueryHandler;
}
