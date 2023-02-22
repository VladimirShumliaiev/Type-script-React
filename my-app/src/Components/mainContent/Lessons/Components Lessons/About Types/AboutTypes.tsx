import React, {FC} from 'react';

const AboutTypes: FC = () => {
    //      Any
    let aAny: any = 777
    const bAny: any = ['danger']
    let cAny = aAny + bAny
    console.log(`Examples Any = ${cAny}`)

    //    Unknown
    let aUnknown: unknown = 30
    let bUnknown = aUnknown === 123
    // let cUnknown = aUnknown + 10
        if (typeof aUnknown === "number") {
            let d = aUnknown + 10
        }
    console.log(`Examples Unknown = ${aUnknown}`)

    //    Boolean
    let aBoolean = 10
    const bBoolean: number = 20
    const bBoolean2 = 20
    const cBoolean = aBoolean < bBoolean
    let dBoolean = false
    const gBoolean = false
    // let fBoolean: false = true
    const hBoolean: boolean = false
    console.log(`Examples Boolean = ${hBoolean}`)


    return (
        <>
            <div>
                {cAny}
            </div>
            <div>
                {bUnknown}
            </div>
            <div>
                {dBoolean}
            </div>
        </>
    );
};

export default AboutTypes;