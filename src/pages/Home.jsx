import Courses from "../components/Courses";
import Hero from "../components/Hero";
import RoadMap from "../components/RoadMap";
import Quizzes from "../components/Quizzes";
import EducationalVideos from "../components/EducationalVideos";

function Home() {
  return (
    <div className="min-w-screen h-auto">
      <div className="container mx-auto">
        <Hero />
        <Courses />
        <RoadMap />
        <Quizzes />
        <EducationalVideos />
      </div>
    </div>
  );
}

export default Home;
