export class acceptedTask {

    constructor (
        public taskid: number,
        public startlat: number,
        public startlng: number,
        public endlat: number,
        public endlng: number,
        public title: String,
        public description: String,
        public status: number,
        public receiverid: number,
        public routeid: number
    ) { }
}