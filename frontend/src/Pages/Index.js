import React from 'react';
import useTitle from '../Components/SetTitle';
import HomeCard from '../Components/HomeCard';

const Index = () => {
    useTitle('Home');
    return (
        <div className='w-full rounded-2xl border border-gray-400 p-4'>
            <h1 className='text-3xl font-bold'>Home</h1>
            <p className='text-lg'>Choose your action</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
                <HomeCard title='Games' description='View all games records' link='/Games' />
                <HomeCard title="Update Data" description="Update data" link="/Update" />
                <HomeCard title='Teams' description='View all teams records' link='/Teams' />
                <HomeCard title="Add Data to Teams" description="Add data to teams" link="/AddData" />
                <HomeCard title='Delete Records' description='Delete records' link='/Delete' />
            </div>
        </div>
    );
};

export default Index;