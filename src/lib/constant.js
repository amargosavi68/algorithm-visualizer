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
          designation: 'Software Developer',
          description: '',
          image: '',
          linkedIn: '',
          github: '',
          email: '',
     },
     {
          name: 'Mr. Omshree Dalvi',
          designation: 'Software Developer @NeoSoft Technologies',
          description: '',
          image: '',
          linkedIn: '',
          github: '',
          email: '',
     },
     {
          name: 'Miss. Purva Sakpal',
          designation: 'Software Developer @NeoSoft Technologies',
          description: '',
          image: '',
          linkedIn: '',
          github: '',
          email: '',
     },
]