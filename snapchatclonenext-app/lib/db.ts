import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectionDatabase = async () => {
	if (isConnected) {
		console.log('Mongodb already connected');
		return isConnected
	}
	try {
		const res = await mongoose.connect(process.env.MONGO_URL!)
		isConnected = res.connection;
		console.log('mongodb connected successfully');
		return true;
	} catch (error) {
		console.log(error);
		throw error
	}
}

export default connectionDatabase;