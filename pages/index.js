import Card from "@components/Card";
import Loading from "@components/Loading";
import WelcomeCard from "@components/WelcomeCard";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Loading />
    </div>
  );
}
