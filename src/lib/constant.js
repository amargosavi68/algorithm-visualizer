import { Link, People, Reorder, Search, ViewArray } from "@material-ui/icons";

export const listItems = [
     {
          key: 0,
          text: 'Array',
          component: <ViewArray/>
     },
     {
          key: 1,
          text: 'Linked List',
          component: <Link />
     },
     {
          key: 2,
          text: 'Stack',
          component: <Reorder />
     },
     {
          key: 3,
          text: 'Queue',
          component: <People />
     },
     {
          key: 4,
          text: 'Binary Search',
          component: <Search />
     }
]