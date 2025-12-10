var namePerson = "Héctor";

function print(n) {
    let namePerson = n;
    namePerson = n;

    {
        let namePerson = "Juan"
        namePerson = "Juan 2"
        console.log(namePerson)
    }

    console.log(namePerson);
}

print("Francisco");