function CreatureList({creatureListProp}){

    return(
        <>
            <h2>All Creatures</h2>
            <ul>
                {creatureListProp.map(creature => 
                (<li key={creature.id}>{creature.name} is from {creature.origin}</li>)
                )}
            </ul>
        </>
    )
}

export default CreatureList;