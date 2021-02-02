const user = {
  firstName: 'Prénom',
  lastName: 'Nom'
} 

function FormatName(user) {
  return user.firstName + ' ' + user.lastName
}

const JsxExample = () => {
  return (
    <>
      {FormatName(user)}
    </>
  )
}

export default JsxExample