"useClient"

import Image from "next/image";
import Card from "./components/card";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green1">
      <Card />
    </main>
  );
}
