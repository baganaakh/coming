export default class apiService {
static async noAuthInsert(entity, postData) {
  const result = fetch(`https://api.digit.mn/${entity}`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers:{
      'Content-Type': 'application/json'
      //'Authorization': 'Bearer ' + CONFIG.token
    }
  })
    .then( (response) => response.json())
    .then(res => {
      return res
    })
    .catch(error => {
      return { error }
    })

  return result
}}