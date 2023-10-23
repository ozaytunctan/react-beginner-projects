import {object, ref, string} from 'yup';

const validations = object({

    email: string()//
        .email("Geçerli bir email girin."),

    password: string()//
        .min(5, "Şifreniz enaz 5 karakter uzunluğunda olmalıdır.")//
        .required("Şifre alanı zorunlu."),

    passwordConfirm: string()//
        .oneOf([ref('password')], "Şifreler Uyuşmuyor")//
        .required("Şifre tekrar alanı zorunlu.")

});
export default validations;