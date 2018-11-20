
// [Major, minor, patch]

class Version {

    // versionCode: [Major, minor, patch]
    constructor(versionCode){
        this.versionCode = versionCode;
    }

    equals(version) {
        for(let i = 0; i < this.versionCode.length; i++){
            if(version.versionCode[i] !== this.versionCode[i]){
                return false;
            }
        }
        return true;
    }

    isHigherThan(version, depth = 2){
        if(depth > this.versionCode.length){
            depth = this.versionCode.length;
        }

        for(let i = 0; i < depth; i++){
            if(this.versionCode[i] > version.versionCode[i]){
                return true;
            }
            if(this.versionCode[i] < version.versionCode[i]){
                return false;
            }
        }
        return false;
    }

    isLowerThan(version, depth = 2){
        return !this.equals(version) && !this.isHigherThan(version, depth);
    }
}

let VERSION = new Version();

export {VERSION};