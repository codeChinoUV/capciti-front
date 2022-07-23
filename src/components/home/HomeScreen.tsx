import Asset1 from '../../assets/asset1.png'
import CourseImg from '../../assets/course1.png';
import {CourseI} from "../../models/Course";
import {CoursesContainer} from "../common/courses/CoursesContainer";
import {SectionSeparator} from "../common/SectionSeparator";
import Separator1 from "../../assets/separator1.jpeg";
import Separator2 from "../../assets/separator2.jpeg";
import {Footer} from "../common/Footer";
import {TextInput} from "../common/TextInput";
import {FaSearch} from "react-icons/fa";
import {useState} from "react";

const courses: CourseI[] = [
  {name: 'Redes sociales para tu negocio', description: 'Aprende como usar las redes sociales para impulsar tu negocio', img: CourseImg},
  {name: 'Redes sociales para tu negocio', description: 'Aprende como usar las redes sociales para impulsar tu negocio', img: CourseImg},
  {name: 'Redes sociales para tu negocio', description: 'Aprende como usar las redes sociales para impulsar tu negocio', img: CourseImg},
  {name: 'Redes sociales para tu negocio', description: 'Aprende como usar las redes sociales para impulsar tu negocio', img: CourseImg},
  {name: 'Redes sociales para tu negocio', description: 'Aprende como usar las redes sociales para impulsar tu negocio', img: CourseImg},
]

export const HomeScreen = () => {

  const [search, setSearch] = useState('');

  return (
    <div className='flex-1 h-full w-screen flex flex-col overflow-y-scroll'>
      <div>
        <img src={Asset1}
             alt='learning'
             className='w-full h-auto' />
      </div>
      <div className='bg-white pl-4 flex-1'>
        <div className='mr-4 my-5'>
          <TextInput name='search'
                     onInput={(e: any) => {setSearch(e.target.value)}}
                     value={search}
                     placeHolder='Search...'
                     icon={FaSearch} />
        </div>
        <CoursesContainer courses={courses} title='Posibilidades' />
      </div>
      <div className='bg-white pl-4 flex-1'>
        <CoursesContainer courses={courses} title='Recomendaciones' />
      </div>
      <div className='bg-white pl-4'>
        <SectionSeparator img={Separator1} text='Consigue todo lo que necesitas para le regreso a clases' />
      </div>
      <div className='bg-white pl-4 flex-1'>
        <CoursesContainer courses={courses} title='Certificaciones' />
      </div>
      <div className='bg-white pl-4'>
        <SectionSeparator img={Separator2} text='Agiliza tus habilidades culinarias, con los mejores prductos.' />
      </div>
      <Footer />
    </div>
  )
}