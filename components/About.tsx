export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-b from-black to-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-12">
          About Me
        </h2>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">

          <p className="text-gray-300 text-lg leading-9">
            I am Gowtham K, a postgraduate Computer Science student
            passionate about Artificial Intelligence, Machine Learning,
            Data Analytics, Research Innovation and Software Development.
            My academic journey includes multiple research publications,
            IEEE reviewer responsibilities, internships, and active
            participation in technical and professional development
            activities.
          </p>

          <p className="text-gray-300 text-lg leading-9 mt-6">
            I am interested in both IT and non-IT career opportunities,
            where I can contribute through analytical thinking,
            problem-solving abilities, communication skills and
            technology-driven innovation.
          </p>

        </div>

      </div>
    </section>
  );
}