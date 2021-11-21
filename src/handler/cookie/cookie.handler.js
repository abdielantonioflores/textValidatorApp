
export const COOKIE = (() => {
    return {
        set: (name, params) => {
            document.cookie = `${name}=${params}; path=/`;
        },
        get: (name) => {
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
        },
        delete: (name) => {
            var expiry = new Date();
            expiry.setDate(expiry.getDay() - 1);
            document.cookie = name + `=; expires = ${expiry}; path=/`;
        },
        setInSession: (name, params) => {
            document.cookie = `${name}=${params}`;
        },

    }
})()

