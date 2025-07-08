import { QueryProvider } from "@/components/QueryProvider";
import { StateProvider } from "@/components/StateProvider";
import { State } from "@/pages/ReduxState";
import { UseQuery } from "@/pages/UseQuery";

export default function Home() {
  return (
    <StateProvider>
      <QueryProvider>
        <>
          <State />
          <UseQuery />
        </>
      </QueryProvider>
    </StateProvider>
  );
}
