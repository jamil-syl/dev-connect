import React from 'react'

var myCar = [];
const Cars = (myCar) => {
    return myCar;
}

const Test = () => {
    return (
        <>
            <h2>{
                Cars(
                    myCar=["Bmw ","Toyota ","Corrolla"]
                )
            }</h2>
        </>
    )
}

export default Test
