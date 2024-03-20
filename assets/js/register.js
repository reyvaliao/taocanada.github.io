

function checkForms() {

    const requiredFields = [
        "name",
        "address",
        "phone",
        "employer",
        "arrived",
        "status",
        "photo",
        "emergency",

        "alexis",
        "root",
        "initiated",
        "welcome",
        "dateWelcomed",
        "gt",
        "mi",
        "vouched",
        "batchmates"

    ];
    let valid = true;
    requiredFields.forEach(v => {
        document.querySelector('#' + v).classList.remove('is-invalid');
        if (document.querySelector('#' + v).value.length === 0) {
            document.querySelector('#' + v).classList.add('is-invalid');
            valid = false;
        }

        const fileList = document.getElementById('col').files[0];
        const files = Object.keys(fileList).reduce((arr, key) => {
            arr.push(fileList[key]);
            return arr;
        }, []);

        console.log(files);

    })
    if (valid) {
        const formData = {}
        requiredFields.filter(v !== 'col' || v !== 'photo').forEach(v => {
            formData[v] = document.querySelector('#' + v).value
        })

    }
    document.querySelector('.error-message').textContent = ""
    if (!valid) {
        document.querySelector('.error-message').textContent = "Required field is missing"
    }
}
(function () {
    document.querySelector('button[type="submit"]').addEventListener('click', checkForms)
    const inputElement = document.getElementById("col");
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() {
        debugger
        const fileList = this.files; /* now you can work with the file list */
    }
})();