export class acceptedTask {

    constructor (
        public taskid: number,
        public startlat: number,
        public startlng: number,
        public endlat: number,
        public endlng: number,
        public description: String,
        public status: number,
        public receiverid: number,
        public routeId: number
    ) { }
}