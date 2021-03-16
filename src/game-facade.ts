import 'puremvc-typescript-multicore';
import { NotificationNames } from './constants';
import { StartupCommand } from './controller/startup.command';

export class GameFacade extends puremvc.Facade {
    static getInstance(key: string): GameFacade {
        if (!this.instanceMap[key]) {
            this.instanceMap[key] = new GameFacade(key);
        }

        return this.instanceMap[key] as GameFacade;
    }

    constructor(key) {
        super(key);
    }

    startup() {
        this.sendNotification(NotificationNames.STARTUP);
    }

    initializeController(): void {
        super.initializeController();

        this.registerCommand(NotificationNames.STARTUP, StartupCommand);
    }
}
