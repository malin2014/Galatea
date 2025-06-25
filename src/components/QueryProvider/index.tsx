"use client";
import { JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { API_URL, fetchAPI } from "@/utils";

const queryClient = new QueryClient();

/**
 * Prefetch data.
 */
queryClient.prefetchQuery({
  queryKey: ["recipes"],
  queryFn: () => fetchAPI(API_URL),
});

/**
 * Provides the React Query context to its child component.
 *
 * @param children - The single React element to be wrapped with the QueryClientProvider.
 * @returns The children wrapped with QueryClientProvider, enabling React Query features.
 */
export const QueryProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
