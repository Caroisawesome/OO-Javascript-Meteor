class Button {
    constructor (settings) {
        this.text = settings.text || '';
        this.icon = settings.icon || '';
        this.type = settings.type || '';
        this.classes = settings.classes || '';
        this.attributes = settings.attributes;

    }

    draw() {
        return new Handlebars.SafeString('<button type="' + this.type + '" class="' + this.classes + '" ' + this.attributes + '>' + this.icon + this.text + '</button>');
    }
}

