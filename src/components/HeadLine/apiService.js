export default class apiService {

  // static async find(entity, filter) {
  //   const filterVars = filter && filter.length > 0 ? `?${filter}` : ''
  //   return await getContent(`${entity}${filterVars}`)
  // }

  static async noAuthInsert(entity, postData) {
    const result = fetch(`https://api.digit.mn/${entity}`, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
        //'Authorization': 'Bearer ' + CONFIG.token
      }
    })
      .then((response) => response.json())
      .then(res => {
        return res
      })
      .catch(error => {
        return {error}
      })

    return result
  }
}