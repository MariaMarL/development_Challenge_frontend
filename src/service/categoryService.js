const ENDPOINT = 'http://localhost:8081/api/categories'


const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

export const getCategories = async () => {
  const response = await fetch(ENDPOINT)
  const data = await response.json()
  return data
}

export const saveCategories = async (category) => {
    const response = await fetch(ENDPOINT, {method: "POST", body: JSON.stringify(category), headers: HEADERS})
    const data = await response.json()
    return data
  }

  export const deleteCategories = async (category) => {
    const response = await fetch(`${ENDPOINT}/${category.categoryId}`, {method: "DELETE", headers: HEADERS})
    return response
  }