import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AboutPage() {
    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header />
        <main className="flex-grow flex flex-col items-center px-4">
        <h1 className="mt-10 text-2xl sm:text-3xl md:text-4xl">About me</h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg">
               I’m Jonas, a web development student with a 
               strong focus on front-end technologies and 
               digital design. What drives me is the 
               satisfaction of creating websites that not 
               only look good but actually feel good to use. 
               I enjoy working with HTML, CSS, and JavaScript, 
               and recently I’ve been diving into frameworks 
               like React and tools like Tailwind CSS and Figma 
               to expand my skill set.
            </p>
            <p className="mt-4 max-w-2xl">
                What I love most is the creative freedom in 
                web development—finding the balance between 
                technical structure and visual expression. 
                Whether it's designing a simple landing page 
                or building a small web app, I’m always looking 
                for new ways to improve both performance and 
                usability.
            </p>
            <p className="mt-4 max-w-2xl">
                Outside of coding, I’m a huge fan of 
                photography and love capturing street 
                life and nature—my favorite camera right 
                now is the Fujifilm X-T30. I also enjoy 
                making music with Ableton Live, and when I 
                need to relax, I dive into games like 
                *The Witcher 3* or *Hades*. These hobbies 
                help me stay creative and think in 
                different ways, which I believe makes 
                me a better developer too.
            </p>
            <p className="mt-4 max-w-2xl">
                I’m curious by nature and always open 
                to learning new things. 
                My goal is to keep growing through 
                hands-on projects, real-world experience, 
                and good collaboration.
            </p>
        </main>
            <Footer />
            </div>
            </>
    )
}