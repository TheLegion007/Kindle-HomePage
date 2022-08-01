import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import BookList from './App';

// const title = '';
// const author = '';
// const img = '';

const books = [
  {
    id:1,
    img: 'https://m.media-amazon.com/images/I/81StezluKUS._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Complete Novels of Sherlock Holmes',
    author: 'Arthur Conan Doyle '
  },
  {
    id:2,
    img: 'https://m.media-amazon.com/images/I/917RlnXGwIL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Mighty Thor Vol. 1: Thunder In Her Veins (The Mighty Thor (2015-2018))',
    author: 'Jason Aaron and Russell Dauterman '
  },
  {
    id:3,
    img: 'https://m.media-amazon.com/images/I/81SUEMfpwML._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Vote Loki (Vote Loki (2016))',
    author: 'Christopher Hastings , Ralph Macchio, et al. '
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book)=>{
        const {img , title, author } = book;
        return (
         //<Book img={img} title={title} author={author}/>
         <Book key={book.id} book={book} />
        )
      })}
    </section>
  );
}

const Book = (props) => {
  //props = {img, title, author}
  const { img, title, author} = props.book;   
  //console.log(props);
  return (
    <article className='book'>
      <img src={img} alt='Books' />
      <h1>{title}</h1> 
      <h4>by {author} </h4>
    </article>
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