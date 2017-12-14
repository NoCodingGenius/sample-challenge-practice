console.log('hello from the browser JavaScript')

document.getElementById("update-profile-button")
.addEventListener('click', () => {

  function getElementValue(className) {
    return document.querySelector(className).value
  }

  const full_name = getElementValue('.user-full-name')
  const email = getElementValue('.user-email')
  const userId = getElementValue('.user-id')

  const url = `/users/${userId}`

  fetch(url, {
    method: 'PUT',
    body: JSON.stringify({full_name, email}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then((response) => {
    window.location.pathname = response.REDIRECT_URL
  })
  .catch(console.log)

})
