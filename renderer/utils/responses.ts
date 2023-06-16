
export class ResponseTypeHelper {
    private _innerDict = {};

    register(responseId: number, f: (response: any) => void) {
        this._innerDict[responseId] = f;
    }

    compute(responseId:number, response:any) {
        this._innerDict[responseId](response);
    }
}