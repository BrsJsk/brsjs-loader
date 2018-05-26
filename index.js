import './style.css';

class Loader {
    constructor(placeToDisplay, type) {
        this.uniqueClassName = '-brsjsloader';
        this.type = type ? type : 'standard';
        this.element = document.getElementById(placeToDisplay);
        this.loader = document.createElement("div");
        this.loader.className = this.type + this.uniqueClassName;
    }

    hide() {
        this.loader.remove()
    }

    show() {
        this.element.appendChild(this.loader)
    }
}

export default Loader;