import InTouchButton from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className='flex my-40 mx-[180px] gap-70'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-6xl'>Jonas</h1>
            <p className="w-[492px]">Hi, I’m Jonas, a Danish student currently studying at the Center for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole. I’m passionate about web development and digital design, and I’m always exploring new tools and technologies to improve my skills.</p>
            <div>
              <InTouchButton buttonText='Get in touch' />
            </div>
          </div>
          <img className=' rounded-full w-95' src="/jonas.png" alt="" />
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
}
