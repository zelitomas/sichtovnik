let defaults = {

};


class UserPreferences {



    static getValue(key, defOption){
        let result = localStorage.getItem(key);
        if(result === null){
            if(defOption !== undefined){
                return defOption;
            }
            return defaults[key] === null ? null : defaults[key];
        }
        return JSON.parse(result);
    }

    static setValue(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export default UserPreferences;