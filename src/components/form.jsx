import InTouchButton from "./button";

export default function Form(){
return(
    <div className="flex justify-center items-center flex-col">
        <div className=" flex w-[570px] text-center flex-col ">
            <h1 className="text-[34px] mt-[11px] mb-[10px]">Get In Touch</h1>
            <p className="text-[#9C9C9C]">Thanks for stopping by!  
                If you're looking for a motivated and 
                detail-oriented web developer with a strong 
                interest in front-end technologies and clean, 
                responsive design—I’d love to hear from you.  
                Whether it’s about a project, an internship, 
                or just a quick conversation, feel free to 
                reach out. I'm always open to new 
                opportunities and ways to grow.
            </p>
            </div>
        <form className="flex flex-col w-[380px]">


            <label className="mt-[40px]" htmlFor="email">Email</label>
            <input className="bg-[#F8F8F8] border-[#D8D8D8] text-[#757575] p-[12px] rounded mb-[20px]" type="email" id="email" name="email" placeholder=" Please enter your email"/>
            <label htmlFor="number">Mobile</label>
            <input className="bg-[#F8F8F8] border-[#D8D8D8] text-[#757575] p-[12px] rounded mb-[20px]" type="number" id="number" name="number" placeholder="Enter mobile" />
            <label htmlFor="message">Message</label>
            <textarea className="bg-[#F8F8F8] border-[#D8D8D8] text-[#757575] p-[12px] mb-[12px] rounded"  id="message" name="message" placeholder="Enter your message" rows={5} />
            <InTouchButton buttonText={"Submit"}/>
        </form>
    </div>
)    
}