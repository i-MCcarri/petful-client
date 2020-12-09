import config from './config'

const ApiService = {
    getPets() {
        return fetch(`${config.REACT_APP_API_BASE}/pets`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getPeople() {
        return fetch(`${config.REACT_APP_API_BASE}/people`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    addPerson(name) {
        return fetch(`${config.REACT_APP_API_BASE}/people`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ name,}),
        })
        .then(res =>
            (!res.ok) 
                ? res.json().then((e) => Promise.reject(e)) 
                : name
      )
  },

    removePersonAndPet(type) {
        const animalToRemove = {
            type: `${type}`
        }
        return fetch(`${config.REACT_APP_API_BASE}/pets`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(animalToRemove)
        })
    }
}

export default ApiService