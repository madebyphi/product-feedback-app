import Button from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import Pill from "@/components/Pill";
import Text from "@/components/Text";
import { Textfield } from "@/components/Textfield";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className={`mb-3 text-2xl font-semibold`}>
          Learn{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
          {/* <Text as="H1" content="This is wild" />
          <Pill hasTopIcon content={"99"} />
          <Textfield />
          <Dropdown items={["Feature", "UI", "UX"]} /> */}
        </div>
      </div>
    </main>
  );
}
