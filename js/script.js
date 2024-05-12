
const server = "http://localhost:3000/profile-cars/"

let cars = [];

//read - get

const readData = async () => {
    await axios.get(server).then(car => console.log(cars = car.data))
    console.log(cars);
    displayData()
}

readData()

const displayData = () => {
    divDisplay.innerHTML = cars.map(car => `<div>
        Customer: ${car.Customer}${"-"}
        Name: ${car.Name}${"-"}
        Model: ${car.Model}${"-"}
        Color: ${car.Color}
        <button onclick="deleteData('${car.id}')" > Delete </button>  
        <button onclick="updateData('${car.id}')"> Update </button>
    </div>`).join("")
}

//Create

const addData = async () => {
    console.log("coraallllll"); // button test
    await axios.post(server, {
        Customer: customerInput.value,
        Name: nameInput.value,
        Model: modelInput.value,
        Color: colorInput.value
    }).then(pos => console.log(pos))
    displayData()

}

//Update
const updateData = async (id) => {
    console.log("helloooo" + id); // button test
    await axios.put(server + id, {
        Customer: customerInput.value,
        Name: nameInput.value,
        Model: modelInput.value,
        Color: colorInput.value
    }).then(up => console.log(up))
    displayData()
}

//Delete
const deleteData = async (id) => {
    console.log("tesssttttt");// button test
    await axios.delete(server + id).then(del => console.log(del))
    displayData()
}


