import React from 'react'
import Button from '../Button'
import Input from '../Input'

export default function YearlyStats({ text, setText, submit }) {
    return (
        <div className='flex flex-col'>
            <Input label="Get Yearly Stats" type="number" value={text} onChange={(e) => setText(e.target.value)} placeholder="Year" required />
            <Button onClick={submit}>Submit</Button>
        </div>
    )
}
