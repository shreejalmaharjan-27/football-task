import sample from '../samples/football.csv'
import csv from 'csvtojson'
import schema from '../functions/schema'
import { db, connectDB } from '../functions/db'
import Game from '../functions/schema';

const importSamples = async () => {
    try {
        const data = await csv().fromFile(sample);
        await connectDB();

        const importData = await Game.insertMany(data);
        if (importData) {
            console.log('Data imported successfully');
        }

        db.close();
    } catch (err) {
        console.error(`Error importing data: ${err.message}`);
        process.exit(1);
    }
};

importSamples();

export default importSamples;