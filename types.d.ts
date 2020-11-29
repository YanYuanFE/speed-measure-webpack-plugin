import { Plugin, Configuration, Compiler } from 'webpack';

export = SpeedMeasurePlugin;


declare class SpeedMeasurePlugin extends Plugin {
    constructor(options?: SpeedMeasurePlugin.Options);

    wrap(config: Configuration): Configuration;

    apply(compiler: Compiler): void;

    getOutput():string;

    addTimeEvent(category: string, event:string, eventType: string, data: {watch: boolean; fillLast: boolean})

    provideLoaderTiming(info: any): void;

}

declare namespace SpeedMeasurePlugin {
    
}
