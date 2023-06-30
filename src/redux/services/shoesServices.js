import axios from "axios";

export const getShoes = async() => {
    const shoes = await axios.get('http://localhost:8000/shoes')
    return shoes.data
}

export const createShoes = async(shoesData) => {
    console.log(shoesData)
    const shoes = await axios.post('http://localhost:8000/shoes', shoesData)
    return shoes.data
}

const shoesService = {
    getShoes, createShoes
}

export default shoesService