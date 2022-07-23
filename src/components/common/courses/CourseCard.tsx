import {Rating} from "react-simple-star-rating";
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import {CourseI} from "../../../models/Course";

interface CourseCardPropsI {
  course: CourseI;
}

export const CourseCard = ({course}: CourseCardPropsI) => {
  return (
    <div className='h-60 w-60 rounded-lg shadow-soft'>
      <img src={course.img}
           alt="Course img"
           className='w-full h-32 object-cover rounded-t-lg' />
      <div className='h-28 p-3 flex flex-col justify-between'>
        <div>
          <p className='text-primary font-semibold text-sm'>{course.name}</p>
          <p className='text-primary text-xs mt-1'>{course.description}</p>
        </div>
        <div className='flex justify-between items-center relative'>
          <div className='flex gap-1'>
            <p className='text-primary text-xs'>4.5</p>
            <div className='absolute left-5 -top-1.5'>
              <Rating onClick={() => {}}
                      ratingValue={3}
                      initialValue={4}
                      readonly={true}
                      iconsCount={5}
                      size={17}
                      className='flex' />
            </div>
          </div>
          <BsFillBookmarkPlusFill className='bg-facebookDisable text-lg icon-bm-add'/>
        </div>
      </div>
    </div>
  )
}