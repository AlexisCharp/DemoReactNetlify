const Thead = () => {
  return (
    <thead>
      <tr>
        <th style={styles.p2}>Nom</th>
        <th style={styles.p2}>Prénom</th>
        <th style={styles.p2}>Email</th>
      </tr>
    </thead>
  );
};

const Tbody = (props) => {
  const people = props.people
  return (
    <tbody>
      {people.map((person, i) => 
        (
          <tr key={i}>
            <td style={styles.p2}>{person.firstName}</td>
            <td style={styles.p2}>{person.lastName}</td>
            <td style={styles.p2}>{person.email}</td>
          </tr>
        )
      )}
    </tbody>
  );
};

function Table(props) {
  const data = props.data
  return (
    <table border="1" style={styles.mt5}>
      <Thead />
      <Tbody people={data}/>
    </table>
  );
}

const styles = {
  mt5: {
    marginTop: '2rem'
  },
  p2: {
    padding: '0.6rem'
  }
}

export default Table;
