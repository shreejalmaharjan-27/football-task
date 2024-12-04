import React, { useEffect, useState } from 'react'
import Axios from '../Plugins/Axios'
import Loading from '../Components/Loading';
import Button from '../Components/Button'
import Filter from '../Components/Filter';


const fetchGames = async (type, params) => {
    const types = {
        "all": "/",
        "ByTeam": "/"
    }


    const request = await Axios.get(types[type], { params });
    return request.data.data;
}
const Games = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const [filterParams, setFilterParams] = useState({});
    const [filterType, setFilterType] = useState('all');
    useEffect(() => {
        fetchGames(filterType, filterParams).then((data) => {
            setGames(data);
            console.log(data)
        }).finally(() => {
            setIsLoading(false);
        });
    }, [filterType, filterParams]);

    if (isLoading && games.length === 0) {
        return <Loading />
    }

    return (
        <>
            <div className='text-2xl font-bold mb-2 flex justify-between items-center'>
                <span className='self-start'>All Games</span>
                <div className='w-96 items-end flex flex-col'>
                    <Button className="lg:w-20" onClick={() => setFilterIsOpen(!filterIsOpen)}>Filter</Button>
                    {
                        filterIsOpen && <Filter setFilterParams={setFilterParams} setFilterType={setFilterType} />
                    }
                </div>
            </div>
            <div className="border border-gray-400 rounded-2xl">
                <table className="games-table">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Team Name
                            </th>
                            <th>
                                Game Played
                            </th>
                            <th>
                                Game Win
                            </th>
                            <th>
                                Game Draw
                            </th>
                            <th>
                                Game Loss
                            </th>
                            <th>
                                Goal For
                            </th>
                            <th>
                                Goal Against
                            </th>
                            <th>
                                Game Points
                            </th>
                            <th>
                                Game Year
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            games.map((game, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {game.team}
                                        </td>
                                        <td>
                                            {game.games_played}
                                        </td>
                                        <td>
                                            {game.win}
                                        </td>
                                        <td>
                                            {game.draw}
                                        </td>
                                        <td>
                                            {game.loss}
                                        </td>
                                        <td>
                                            {game.goals_for}
                                        </td>
                                        <td>
                                            {game.goals_against}
                                        </td>
                                        <td>
                                            {game.points}
                                        </td>
                                        <td>
                                            {game.year}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Games
