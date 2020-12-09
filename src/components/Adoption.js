import React from 'react';
import PetService from '../PetService';

//Adoption Form component to import to Adopt component
export default class AdoptionPage extends React.Component {
    
    state = {
        cat: {},
        dog: {},
        people: [],
        name: '',
        adopter: '',
        adopted: false,
        loading: false,
        
    }
    
    componentDidMount() {
        this.setState({ loading: true })
    
        PetService.getPets()
        .then(
            pets => {
            this.setState({
                cat: pets.cat,
                dog: pets.dog
            })
            }
        )
        .catch(error => {
            console.error({ error })
        })

        PetService.getPeople()
        .then(
            people => {
                this.setState({
                    people, loading: false
                })
            }
    
        )
        .catch(error => {
            console.error({ error })
        })
    }
    
    renderPeople =() => {
        let people = this.state.people
    
        if( people.length > 1) {
        return people.map((person, index) => (
        <li key={index}>{person}</li>
        ))
        }
        
        if(this.state.people.length ===1) {
        this.addPeopleToQueue()
        }
        
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    handleAddToQueue = (e) => {
        e.preventDefault();
        PetService.addPerson(this.state.name).then((res) => {
        this.setState({
            people: [...this.state.people, res],
            adopter: res,
            name: '',
        })
        })
        
    
        this.timeout = setInterval(() => {
        let dogOrCat = Math.floor(Math.random()* 2)
        let type= ''
        if (dogOrCat ===0) {
            type = 'dogs'
        }else {
            type = 'cats'
        }
    
        PetService.removePersonAndPet(type)
        .then((res) => {
            PetService.getPets()
            .then((res) => {
            this.setState({
                dog: res.dog,
                cat: res.cat,
            })
            })
            .catch(error => {
            console.error({ error })
            })
            PetService.getPeople()
            .then((res) => {
            this.setState({
                people: res
            })
            })
            .catch(error => {
            console.error({ error })
            })
        })
        }, 5000)
    }
    
    addPeopleToQueue() {
        let addNewPeopleTimer = setTimeout(() => {
        if (this.state.people === 5) {
            clearTimeout(addNewPeopleTimer)
        }
    
        const randomPeople = [
            'Dean',
            'Charlie',
            'Cass',
            'Sam',
            'Crowley',
            'Ruby',
            'Jo',
            'Ellen',
            'Gabriel',
            'Jack',
            'Lucifer'
        ]
    
        const randomPerson = 
            randomPeople[Math.floor(Math.random() * randomPeople.length)]
    
            if (this.state.people.length < 5) {
            PetService.addPerson(randomPerson)
            .then((res) => {
                this.setState({
                people: [...this.state.people, res]
                })
            })
            .catch(error => {
                console.error({ error })
            })
            }
        }, 5000)
    }
    
    handleAdoption = (type) => {
        PetService.removePersonAndPet(type)
        .then((res) => {
            this.setState({adopted: true})
            PetService.getPets()
            .then((res) => {
            this.setState({
                dog: res.dog,
                cat: res.cat,
            })
            })
            .catch(error => {
            console.error({ error })
            })
            PetService.getPeople()
            .then((res) => {
            this.setState({
                people: res
            })
            })
            .catch(error => {
            console.error({ error })
            })
        })
    }
    
    adoptedRender() {
        return (
            <h2>Congrats you just adopted your very own pet!</h2>
            )
    }
    
    
    render() {
        const { cat, dog, people, adopter, loading } = this.state
    
        if ((dog.length === 0 || cat.length === 0) && !loading) {
        return <div> Purrently our of Stock, sniff around later! </div>
        } else if( adopter === people[0]) {
        this.addPeopleToQueue();
        clearInterval(this.timeout);
        }
        else if ( people.length > 5) {
        clearInterval(this.addNewPeopleTimer)
        }
        
        return (
            
            <div className='container'>
                {this.state.loading 
                    ? (<p className='loading'>... Loading ...</p>)
                    : (<div className='adopt-wrapper'>
                        <h2>Pawprint Make it a Home!</h2>
                        <h3>Next in line is:</h3>
                        <ul className='applicant-list'>
                            {this.renderPeople()}
                        </ul>
                        <form
                            className="add-to-list"
                            onSubmit={(e) => this.handleAddToQueue(e)}
                        >
                            <label htmlFor="name">Sign-up there’s sure to be a pawsitive outcome! </label>
                            <br />
                            <input
                            type="text"
                            name="name"
                            id="name-input"
                            onChange={this.handleChange}
                            value={this.state.name}
                            required
                            />
                            <br />
                            <div className='button'>
                                <button className="button" type="submit">
                                Don't Procatstinate!
                                </button>
                            </div>
                        </form>
            
                        {this.state.adopted ? (<div>{this.adoptedRender()}<br /></div>): (<div></div>)}

                        <section className="animal">
                            <h2 className="animal-name">{cat.name}</h2>
                            <div className='photo-wrapper'>
                                <img className='petPhoto' src={cat.imageURL} alt={cat.breed} />  
                            </div>
                            <div>
                                <fieldset>
                                    <legend><h3>{cat.name}</h3></legend>
                                    <ul className="pet-details cat"> 
                                        <li className="pet-age">Age: {cat.age}</li>  
                                        <li className="pet-breed">Breed: {cat.breed}</li> 
                                        <li className="pet-desc">Desc: {cat.description}</li>
                                        <li className="pet-story">Story: {cat.story}</li>  
                                    </ul>
                                </fieldset>
                                {this.state.adopter === this.state.people[0] && (
                                    <div className='button'>
                                        <button
                                            className="button"
                                            type="button"
                                            onClick={(e) => this.handleAdoption('cats')}
                                        >
                                        Adopt
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>
                        <section className="animal">
                            <h2 className="animal-name">{dog.name}</h2>
                            <div className='photo-wrapper'>
                                <img className='petPhoto'src={dog.imageURL} alt={dog.breed} />
                            </div>
                            <div>
                                <fieldset>
                                    <legend><h3>{dog.name}</h3></legend>
                                    <ul className="pet-details dog">
                                        <li className="pet-age">Age: {dog.age} years</li>  
                                        <li className="pet-breed">Breed: {dog.breed}</li> 
                                        <li className="pet-desc">Desc: {dog.description}</li>
                                        <li className="pet-story">Story: {dog.story}</li>  
                                    </ul>
                                </fieldset>
                            </div>
                            {this.state.adopter === this.state.people[0] && (
                                <div className='button'>
                                    <button
                                        className="button"
                                        type="button"
                                        onClick={(e) => this.handleAdoption('dogs')}
                                    >
                                    Adopt
                                    </button>
                                </div>
                            )}
                        </section>
                    </div>
                )}
            </div>)
    }
}