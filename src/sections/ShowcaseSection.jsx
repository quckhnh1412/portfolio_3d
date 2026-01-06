import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  useGSAP(() => {
   const projects = [project1Ref.current, 
                    project2Ref.current, 
                    project3Ref.current];
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y:0,
          opacity:1,
          duration:1,
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          }
        }
      )
    });                
      gsap.fromTo(sectionRef.current,
        {opacity:0},
        {opacity:1,duration:1.5}); 
    }, []);
  return (
    <section id="work"  className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/gym.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Workout Support Website
              </h2>
              <p className="text-white-50 md:text-xl">
                A workout support web application that automatically counts exercise repetitions using computer vision.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/node-project.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Retail Management Platform</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/movieSite.png" alt="YC Directory App" />
              </div>
              <h2>Movie Streaming Service Website</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ShowcaseSection;