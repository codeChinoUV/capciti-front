import {CourseCard} from "./CourseCard";
import {CourseI} from "../../../models/Course";

interface CoursesContainerPropsI {
  title: string;
  courses: CourseI[];
}

export const CoursesContainer = ({title, courses}: CoursesContainerPropsI) => {
  return (
    <div>
      <p className='text-primary text-base my-3'>{title}</p>
      <div className='w-full overflow-x-scroll pb-3'>
        <div className='flex gap-4 flex-nowrap overflow-scroll w-max py-2'>
          {
            courses.map(c => (
              <CourseCard course={c} />
            ))
          }
        </div>
      </div>
    </div>
  )
}