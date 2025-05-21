import MainLinks from "./MainLinks";
import Alert from "../ui/Alert";

export default function Main() {
  return (
    <main id="page-main-content">
      <section id="content">
        <div className="container">
          <h2>CONTENT GOES HERE</h2>
          <Alert type="" text="" />
        </div>
      </section>
      <section id="merch">
        <div className="container d-flex ">ciao sono merch</div>
      </section>

      <MainLinks />
    </main>
  );
}
