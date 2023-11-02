import { RiErrorWarningFill } from "react-icons/ri";
import { useRouteError } from "react-router";

export default function ErrorElement() {
  const error = useRouteError() as Error;

  console.error(error);

  return (
    <main className="fullscreen-container">
      <h1 style={{ fontSize: "5rem", textAlign: "center" }}>
        <RiErrorWarningFill />
        <br />
        Error loading the page
      </h1>
    </main>
  );
}
