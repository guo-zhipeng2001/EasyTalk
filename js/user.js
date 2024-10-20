class FieldValidator {
    /**
     * 
     * @param {String} txtId 文本框的ID
     * @param {Function} ValidatorFunc  
     */
    constructor(txtId, ValidatorFunc) {
        this.input = $('#' + txtId);
        this.p = this.input.nextElementSibling;
        this.ValidatorFunc = ValidatorFunc;
        this.input.onblur = () => {
            this.validate();
        }
    }




    async validate() {
        const err = await this.ValidatorFunc(this.input.value)
        if (err) {
            this.p.innerText = err;
            return false;
        } else {
            this.p.innerText = '';
            return true;
        }
    }

    static async validate (...validators){
        const proms = validators.map(v=>v.validate);
        const results = await Promise.all(proms);
        return results.every(r=>r);
    }



}


// var loginIdValidator = new FieldValidator('txtLoginId', async function (val) {
//     if (!val) {
//         return '请填写账号';
//     }

//     const resp = await API.exists(val);
//     if (resp.data) {
//         return 'aaa'
//     }
// })