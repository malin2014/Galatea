import { StateProvider } from "@/components/StateProvider";
import { State } from "@/pages/ReduxState";

export default function Home() {
  return (
    <StateProvider>
      <State />
    </StateProvider>
  );
}
