// == Import
import { Grid, Box} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import './style.scss'

// == Composant
import NewBook from './NewBook';
import { useSelector } from 'react-redux';

function Home () {
  const books = useSelector(state => state.books.books)
  const newBook = books.slice((books.length - 6), books.length)
  console.log(newBook)
  return (

    <Grid container >
      <Carousel 
        autoPlay 
        infiniteLoop 
        centerMode 
        centerSlidePercentage={100}
        showThumbs={false} 
        showStatus={false}
      >
      {newBook.map(book => (

            <NewBook 
              key = {book.Num}
              title={book.Titre}
              image={book.Image}
              tag={book.tag.name}
            />
      ))}
           
      </Carousel>
    </Grid>

        
  );

}

// == Export
export default Home;
