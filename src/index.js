import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import BookList from './App';

// const title = '';
// const author = '';
// const img = '';

import {data} from './books'
import Book from './Book'


function BookList() {
  return (
    <section className='booklist'>
      {data.map((book)=>{
        const {img , title, author } = book;
        return (
         //<Book img={img} title={title} author={author}/>
         <Book key={book.id} {...book} />
        )
      })}
    </section>
  );
}


// const Book = (props) => {
//   //props = {img, title, author}
//   //const { img, title, author, children } = props;   // destructuring  here instead of in arguments //
//   //title = props.title;
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src={props.img} alt='Books' />
//       <h1>{props.title}</h1> 
//       <h4>by {props.author} </h4>
//       {props.children}
//     </article>
//   );
// }

// function Image() {
//   return (
//     <img src='https://m.media-amazon.com/images/I/81cd2YOY6iS._AC_UY327_FMwebp_QL65_.jpg' alt='Books' />
//   )
// }

// const Author = () => {
//   return (
//     <h1>by Rabindranath Tagore</h1>
//   );
// }

// const Title = () => {
//   return (
//     <div>
//       Nationalism
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);