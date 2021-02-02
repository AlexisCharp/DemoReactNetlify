const Card = ({title, desc, image}) => {
  return (
    <div className="card" style={styles.card}>
      <h2>Title: {title}</h2>
      <p>Description: {desc}</p>
      <img src={image} alt="" />
    </div>
  )
}

const styles = {
  card: {
    textAlign: 'left',
  }
}

export default Card