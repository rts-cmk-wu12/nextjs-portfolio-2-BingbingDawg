import Footer from "@/components/footer";
import Form from "@/components/form";
import Header from "@/components/header";

export default function ContactPage() {
    return (
         <div className="min-h-screen flex flex-col">
            <Header />
        <main className="flex-grow flex flex-col items-center">
            <Form />
        </main>
            <Footer />
        </div>
    )
}