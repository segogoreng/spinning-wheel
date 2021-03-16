import 'puremvc-typescript-multicore';

export class StartupCommand extends puremvc.SimpleCommand {
    execute(note: puremvc.INotification): void {
        console.log('start up executed');
    }
}
