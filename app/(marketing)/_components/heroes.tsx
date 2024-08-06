import Image from "next/image";
import doc from "@/public/documents.png"
import docDark from "@/public/documents-dark.png"
import read from "@/public/reading.png"
import readDark from "@/public/reading-dark.png"
export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src={doc}
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src={docDark}
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={read}
            fill
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src={readDark}
            fill
            className="object-contain hidden dark:block"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  )
}