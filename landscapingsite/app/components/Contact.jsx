export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-100 ">
      <div className="container mx-auto px-4 text-black ">
        <h2 className="md:text-4xl text-3xl mb-10">Contact</h2>
        <form className="flex flex-col md:w-1/2 w-full gap-4">
          <div className = 'flex flex-col'>
            <label className = 'text-sm'>Name</label>
            <input className="bg-transparent border-b-[1px] border-black outline-none " placeholder="Full Name"/>
          </div>

          <div className = 'flex flex-col'>
            <label className = 'text-sm'>Email</label>
            <input className="bg-transparent border-b-[1px] border-black outline-none " placeholder="Double check your email is correct"/>
          </div>

          <div className = 'flex flex-col'>
            <label className = 'text-sm'>Phone</label>
            <input className="bg-transparent border-b-[1px] border-black outline-none " placeholder="xxx-yyy-zzzz"/>
          </div>

          <div className = 'flex flex-col'>
            <label className = 'mb-1 text-sm'>Tell us about your project, a bit of context will allow us to connect you to the right team faster.
            </label>
            <textarea className="bg-transparent border-[1px] h-20 resize-none border-black"></textarea>
          </div>

          <button className="bg-transparent border-[1px] outline-none md:py-2 w-fit md:px-10 py-1 px-8 hover:bg-white hover:bg-opacity-10 transition-all duration-300 border-black">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}