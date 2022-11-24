export class ConsoleLogger {
    log(message: string, ...params: any[]) {
        console.info(message, params);
    }
}