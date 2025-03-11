class Project {
    constructor(name, colorHex) {
        this.name = name;
        this.colorHex=colorHex;
    }
    getLength(){
        return this.tasks.length;
    }
}

export default Project;