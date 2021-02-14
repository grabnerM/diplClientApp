export class finishedTask {

    constructor (
        public taskid: number,
        public startlat: number,
        public startlng: number,
        public endlat: number,
        public endlng: number,
        public title: String,
        public description: String,
        public starttime: Date,
        public endtime: Date
    ) { }
}