export default function Page() {
  return (
    <main className="container mx-auto px-4">
      <div className="">
        <h1 className="text-center text-2xl my-8">Science</h1>
        <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
          {['General Science', 'Specialized Fields', 'Current Trends', 'Science and Society', 'Scientific Tools and Techniques'].map((tech, index) => (
            <div 
              key={tech}
              className={`
                flex m-2 cursor-pointer items-center justify-center flex-col 
                w-[calc(25%-1rem)] min-w-[130px] h-32 
                p-4 box-border
                hover:shadow-[7px_7px_0px_#000000] bg-slate-300
                ${index >= 4 ? 'mt-4' : ''}
              `}
            >
              <h2 className="text-center text-sm sm:text-base  overflow-hidden text-ellipsis whitespace-nowrap">
                {tech}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
