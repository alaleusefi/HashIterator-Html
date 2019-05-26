window.onload = function () {
    initiallise();
}

function calculateHash() {

    while (result.isComplete() == false) {
        i++;
        let saltI = salt + i;
        let hash = md5(saltI);

        if (hash.startsWithZeros(X) == false)
            continue;

        let index = hash[X];

        if (index.isDigit() == false)
            continue;

        if (result.hasValueAt(index))
            continue;

        let value = hash[i % 32];

        result.setValueAt(index, value);
    }

    console.log(result.join(''));
}

initiallise = function () {
    salt = "code-quality";
    X = 0;
    window.i = 0;
    result = new Array(10);

    for (var i = 0; i < result.length; i++) {
        result[i] = null;
    };
};

Array.prototype.isComplete = function () {
    for (var i = 0; i < result.length; i++) {
        if (result[i] == null)
            return false;
    };
    return true;
};

String.prototype.startsWithZeros = function (x) {
    return this.startsWith('0'.repeat(x));
};

String.prototype.isDigit = function () {
    return this.length == 1 && isNaN(this) == false;
};

Array.prototype.hasValueAt = function (ind) {
    return this[ind] != null;
}

Array.prototype.setValueAt = function (ind, val) {
    this[ind] = val;
}