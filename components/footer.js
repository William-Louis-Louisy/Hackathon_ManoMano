export default function Footer() {
  return (
    <footer className="bg-white shadow-xl">
      <ul className="flex items-center justify-between lg:container px-4 py-4  mx-auto text-sm font md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://taylorbryant.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Scooby-Gang
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Dr-Wouse/Hackathon_ManoMano"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
