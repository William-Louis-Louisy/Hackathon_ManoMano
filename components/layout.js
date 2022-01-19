import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div>
      <Header />

      <main className="flex-1 lg:container px-10 py-7 mx-auto md:px-6 md:py-12 background">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
