<!-- ```
UseQuery/
├── index.ts
├── hooks.ts
├── queries.ts
``` -->

## Required packages:

"@tanstack/react-query"

## Requires

<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

## useQuery Implementation Instructions

1. Ensure use of custom hook that provides mutation functions for managing the useQuery.
    - Example queries.ts
2. This hook returns multiple mutation objects.
3. Each mutation automatically invalidates related query on success to ensure
the state stays up-to-date.
