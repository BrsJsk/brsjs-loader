import './style.css';

class Loader {
    constructor(placeToDisplay, type) {
        this.uniqueClassName = '-brsjsloader';
        this.type = this.getType(type);
        this.element = document.getElementById(placeToDisplay);
        this.loader = document.createElement("div");
        this.loader.className = this.isCustom(type) ? type.split(":")[1] : this.type + this.uniqueClassName;
    }

    hide() {
        this.loader.remove()
    }

    show() {
        this.element.appendChild(this.loader)
    }

    getType(type) {
        if (this.isCustom(type)) {
            return type.split(":")[1];
        }

        return type ? type : standard;
    }

    isCustom(type) {
        let t = type.split(":");
        return t[0] === 'custom';
    }
}

export default Loader;