import { Link, People, Reorder, Search, ViewArray } from "@material-ui/icons";

export const listItems = [
     {
          key: 0,
          text: 'Array',
          component: <ViewArray/>,
          url: '/array'
     },
     {
          key: 1,
          text: 'Linked List',
          component: <Link />,
          url: '/linked_list'
     },
     {
          key: 2,
          text: 'Stack',
          component: <Reorder />,
          url: '/stack'
     },
     {
          key: 3,
          text: 'Queue',
          component: <People />,
          url: 'queue'
     },
     {
          key: 4,
          text: 'Binary Search',
          component: <Search />,
          url: '/binary_search'
     }
]

export const devlopersInfo = [
     {
          name: 'Mr. Amar Gosavi',
          designation: 'Digital Specialist Engineer @Infosys',
          description: 'I would introduce myself in seven words. Passionate coder, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm.',
          image: 'https://media.istockphoto.com/photos/portrait-of-male-student-working-at-laptop-in-college-library-picture-id878934610?k=6&m=878934610&s=170667a&w=0&h=SfoHCVL4SnQ70sGbpzJU4O8UkapB7q2zp4Nlph8udD4=',
          linkedIn: '',
          github: '',
          email: '',
     },
     {
          name: 'Mr. Omshree Dalvi',
          designation: 'Software Developer @NeoSoft Technology',
          description: 'I would introduce myself in seven words. Passionate coder, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm.',
          image: 'https://www.aiminghigherconsultants.com/wp-content/uploads/2013/09/bigstock-Student-Young-Asian-man-in-l-41022490.jpg',
          linkedIn: '',
          github: '',
          email: '',
     },
     {
          name: 'Miss. Purva Sakpal',
          designation: 'Software Developer @NeoSoft Technology',
          description: 'I would introduce myself in seven words. Passionate coder, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm.',
          image: 'https://freedesignfile.com/upload/2018/02/female-college-student-using-laptop-Stock-Photo.jpg',
          linkedIn: '',
          github: '',
          email: '',
     },
]