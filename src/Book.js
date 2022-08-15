const Book = (props) => {
    //props = {img, title, author}
    const { img, title, author} = props;   
    //console.log(props);
    //attribute , eventHandler
    //onClick, onMouseOver
    const clickHandler = () => {
      console.log('function called');   // called as soon as render //
    }
  
    const complexClick = (author) => {
      console.log(author);
    }
  
    return (
      <article className='book'>
        <img src={img} alt='Books' />
        <h1>{title}</h1> 
        <h4>by {author} </h4>
        <button onClick={clickHandler}>Click Me</button>
        <button onClick={() => complexClick(author)}>Second Func</button>   
        {/* <button onClick={complexClick(author)}>Second Func</button> */}   
      </article>
    );
  };

  export default Book;