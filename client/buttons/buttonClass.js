Button = class {
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

ResponsiveButton = class extends Button {
    constructor(settings) {
        super(settings);
        this.classes += ' col-xs-12';
    }
}