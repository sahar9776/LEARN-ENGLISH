import AdultCourse from "../components/AdultCourse";
import ChildrenCourse from "../components/ChildrenCourse";
import TeenagersCourse from "../components/TeenagersCourse";

function CoursesPage() {
  return (
    <div className="min-w-screen h-auto">
      <div className="container mx-auto">
        <AdultCourse />
        <TeenagersCourse />
        <ChildrenCourse />
      </div>
    </div>
  );
}

export default CoursesPage;
