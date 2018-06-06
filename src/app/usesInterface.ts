import { Iinterface } from "./Iinterface";

export class usesInterface implements Iinterface {
    name: string;
    value: number;

    constructor(name: string, value: number){
        this.name = name;
        this.value = value;
    }
}