import Image from "next/image";
import medicineSvg from "../../../public/medicine.svg";
import StyledButton from "@/components/styled-button";

export default function Home() {
  return (
    <div className="m-auto flex min-h-screen items-start justify-center gap-10 lg:w-2/3">
      <div className="flex flex-col items-center gap-10 md:items-start md:gap-0">
        <h1 className="text-4xl font-bold">Lung Vitality</h1>
        <Image
          className="md:hidden"
          src={medicineSvg}
          alt="Medicine svg"
          width={300}
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          beatae sint ipsam asperiores recusandae quos. In, vitae. Veniam,
          minima! Fugiat eius recusandae alias dolor animi. Incidunt
          perspiciatis earum numquam ea dignissimos, consequuntur quisquam eaque
          voluptatum exercitationem, asperiores molestiae illum? Accusantium,
          officiis sapiente. Accusantium voluptas necessitatibus ad deserunt
          provident fugit quidem.
        </p>
        <StyledButton title="Start the test" className="mt-5" />
      </div>

      <Image
        className="hidden w-[50%] md:inline-block"
        src={medicineSvg}
        alt="Medicine svg"
      />
    </div>
  );
}
