import Card from "@components/Card";
import WelcomeCard from "@components/WelcomeCard";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <WelcomeCard question="Would you like a personalized support?" />
    </div>
  );
}
