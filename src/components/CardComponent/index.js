import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

function CardComponent(props) {
  const { title, urlToImage, description, url, author, publishedDate } = props;

  var words = title.split(' ');
  var title_short = title;
  if (words.length > 10) {
    let newwords = words.slice(0,10);
    title_short = newwords.join(' ');
    title_short += "...";
  }

  var hasImage = true;
  if (urlToImage === false) {
    hasImage = false;
  }

  return (
    <Card className="cardItem">
      <CardHeader
        title={author}
        subtitle={publishedDate}
      />

      <CardMedia overlay={<CardTitle title={title_short} subtitle={author} />}>
        {hasImage && <img src={urlToImage} role="presentation" alt={title_short} />}
      </CardMedia>

      <CardTitle title={title} subtitle={publishedDate} />

      <CardText>{description}</CardText>

      <CardActions>
        <a href={url} target="blank">
          <FlatButton primary={true} label="Detail" />
        </a>
      </CardActions>
    </Card>
  )
}

export default CardComponent;