import {ConsoleLogger} from "./consoleLogger.js";

export class CartPersister {
	constructor() {
		this.storage = sessionStorage;
		this.key = 'cart';
		this.logger = new ConsoleLogger();
	}
	read = () => {
		let data = this.storage.getItem(this.key);
		if (!data)
			return null;
		try {
			let dataInJson = JSON.parse(data);
			return dataInJson;
		} catch (exception) {
			logger.error(exception.message);
			return null;
		}
	}
	write = (data) => {
		if (data){
			let dataJsonString = JSON.stringify(data);
			this.storage.setItem(this.key, dataJsonString);
		}
	}
	delete = () => this.storage.removeItem(this.key);
}