export default class Area {
    constructor(name, locations, area_id)
    {
        this.name = name;
        this.area_id = area_id;
        this.locations = locations;
    }

    getName() { return this.name;}
    getLocations() { return this.locations;}
    getLocations(i) { return this.locations[i]; }
}