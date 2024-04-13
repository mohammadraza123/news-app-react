import Card from 'react-bootstrap/Card';

export default function NewsItem(Props) {
  return (
    <Card className='sm:w-[100%]' style={{ width: '24rem' }}>
      <Card.Img variant="top" src={!Props.image ? 'https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq' : Props.image} />
      <Card.Body>
        <h5 className='mb-3'>By {!Props.author ? 'Anonymous' : Props.author} on {new Date(Props.date).toGMTString()}</h5>
        <Card.Title>{Props.title}...</Card.Title>
        <Card.Text>
          {Props.description}
        </Card.Text>
        <a href={Props.url} target="_blank" className="btn btn-primary mt-3">View Detail</a>
      </Card.Body>
    </Card>

  );
}



