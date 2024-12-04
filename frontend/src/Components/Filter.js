import React, { useState } from 'react'
import Button from './Button'
import ByTeam from './Filters/ByTeam';


export default function Filter({
    setFilterParams,
    setFilterType
}) {
    const [byTeamIsOpen, setByTeamIsOpen] = useState(false);
    const [text, setText] = useState('');
    const submit = (type) => {
        console.log('clicked submit')
        switch (type) {
            case 'team':
                setFilterType('ByTeam');
                setFilterParams({
                    team: text
                })
                break;

            default:
                break;
        }
    }
    return (
        <div className='rounded-2xl p-4 flex flex-col text-base items-end'>
            <Button className='mb-2 w-40' onClick={() => setByTeamIsOpen(!byTeamIsOpen)}>Filter By Team</Button>
            {
                byTeamIsOpen && <ByTeam text={text} setText={setText} submit={() => submit('team')} />
            }
        </div>
    )
}

