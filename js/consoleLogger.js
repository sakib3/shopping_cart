export class ConsoleLogger {
    constructor() {
    }
    log = (data) => console.log(data);
    error = (data) => console.error(data);
    info = (data) => console.info(data);
}