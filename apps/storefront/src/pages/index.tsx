import { log } from "logger";
import { CounterButton, NewTabLink,Button } from "ui";

export default function Store() {
  log("Hey! This is Home.");
  return (
    <div>
      <h1>Store</h1>
      <CounterButton />
      <Button variant="primary">Test</Button>
      <NewTabLink href="https://turborepo.org/">
        Built With TurboRepo
      </NewTabLink>
    </div>
  );
}
