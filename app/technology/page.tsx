export default function Page() {
  return (
    <main className="container mx-auto px-4">
      <div className="">
        <h1 className="text-center text-2xl my-8">Web Development</h1>
        <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
          {['HTML', 'CSS', 'JS', 'Tailwind','Git and Github', 'React', 'Next.js' , 'Node.js'].map((tech, index) => (
            <div 
              key={tech}
              className={`
                flex m-2 cursor-pointer items-center justify-center flex-col 
                w-[calc(20%-1rem)] min-w-[130px] h-32 
                hover:shadow-[7px_7px_0px_#000000] bg-slate-300
                ${index >= 5 ? 'mt-4' : ''}
              `}
            >
              <h2>{tech}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}