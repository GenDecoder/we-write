class I18n {
    constructor() {
        const me = this;
        me._data = {};  
        console.log('instance created')
    }
    setData = data => {
        const me = this;
        me._data = data;
    }

    setTest(val) {
        this._a = val;
    }
    getTest() {
        console.log(this._a)
        return this._a;
    }

    getString = (path, ...values) => {
        const me = this;
        let str = path.split('.').reduce(
            (obj, key) => key ? obj ? obj[key] : undefined : obj, me._data
        );
        for (let i = 0; i < values.length; i++) {
            const value = values[i];
            const regex = new RegExp('\\{' + i + '\\}', 'g');
            str = str.replace(regex, value);
        }
        return str;
    }
}
const instance = new I18n();
export default instance;