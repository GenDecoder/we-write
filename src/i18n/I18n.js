class I18n {
    constructor() {
        const me = this;
        me._data = {};
    }
    setData = data => {
        const me = this;
        me._data = data;
    }    
    getString = (path, ...values) => {
        const me = this;
        let str = path.split('.').reduce(
            (obj, key) => key ? obj ? obj[key] : undefined : obj, me._data
        );
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            const regex = new RegExp('\\{[\\s-]*' + i + '[\\s-]*\\}', 'g');
            str = str.replace(regex, value);
        }
        return str;
    }
}
const instance = new I18n();
export default instance;