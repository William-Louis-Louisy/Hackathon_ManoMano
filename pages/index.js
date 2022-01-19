import Card from "@components/Card";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Card question="Would you like a personalized support ?" />
    </div>
  );
}
