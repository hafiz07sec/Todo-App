const person = {
    name: 'Hafiz',
    address: {
        line1: 'Ginnheimer Landstr',
        city: 'Frankfurt',
        country: 'Germany',
    },
    profile: ['twiter', 'linkdin', 'instagram'],
    printProfile: () => {
        person.profile.map(
            profile1 => console.log(profile1)

        )

    }
}


export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div> {person.address.line1}</div>
            <div> {person.profile[0]}</div>
            <div> {person.printProfile()}</div>
        </>
    )
}