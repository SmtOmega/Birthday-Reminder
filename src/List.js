import React, {useState} from 'react'


const List = ({people}) => {
    return(
        <div>
            {people.map(person =>{
                const {id, name, age, image} = person
                return <div key={id} className="person">
                    <img src={image} alt={name} />
                    <div className="details">
                        <h5>{name}</h5>
                        <p>{age} years</p>
                    </div>

                </div>
            })}
        </div>
    )
}
export default List