console.log('hello from the browser JavaScript')

document.getElementById('update-profile-button')
.addEventListener('click', (event) => {
  event.preventDefault()

  const full_name = document.querySelector('.user-full-name').value
  const email = document.querySelector('.user-email').value
  const userId = document.querySelector('.user-id').value

  console.log("222", full_name, email, userId);

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
  .catch(console.log)

})
