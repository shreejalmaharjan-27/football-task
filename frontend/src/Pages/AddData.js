import { useState } from "react";
import useTitle from "../Components/SetTitle";
import Alert from "../Components/Alert";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Randomize from "../Components/Randomize";
import Axios from "../Plugins/Axios";

const AddData = () => {
    const [added, setAdded] = useState(false);

    useTitle('Add Team Data');

    const handleEvent = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const request = await Axios.post('/add', data);
        if (request.data.message === "Success") {
            setAdded(true);
        } else {
            alert('Failed to add');
        }
    }


    return (
        <div>
            {added && <Alert type='success'>Added Successfully</Alert>}

            <h3 className='text-3xl font-bold mb-4'>Add Team Data</h3>
            <form onSubmit={handleEvent} className='grid grid-cols-3 gap-4 items-start'>
                <Input
                    label="Team Name"
                    type="text"
                    id="team"
                    name="team"

                    required
                />

                <Input
                    label="Games Played"
                    type="number"
                    id="games_played"
                    name="games_played"

                    required
                />

                <Input
                    label="Wins"
                    type="number"
                    id="win"
                    name="win"

                    required
                />

                <Input
                    label="Draws"
                    type="number"
                    id="draw"
                    name="draw"

                    required
                />

                <Input
                    label="Losses"
                    type="number"
                    id="loss"
                    name="loss"

                    required
                />

                <Input
                    label="Goals For"
                    type="number"
                    id="goals_for"
                    name="goals_for"

                />

                <Input
                    label="Goals Against"
                    type="number"
                    id="goals_against"
                    name="goals_against"

                />

                <Input
                    label="Points"
                    type="number"
                    id="points"
                    name="points"

                />

                <Input
                    label="Year"
                    type="number"
                    id="year"
                    name="year"

                />

                <Button type='submit'>Add</Button>
            </form>

            <Randomize parentInputElStr={"form input"} />
        </div>
    )
}

export default AddData;