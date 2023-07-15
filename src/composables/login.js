import { useRouter } from "vue-router";
import { useAlertStore } from "@/stores";
import { watchEffect } from "vue";
import { useSignInEmailPassword } from "@nhost/vue";

export function useLogin() {
    const alertStore = useAlertStore();
    const router = useRouter();

    const {
        signInEmailPassword,
        needsEmailVerification,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useSignInEmailPassword();

    watchEffect(() => {
        if (needsEmailVerification.value) {
            alertStore.warn("Revisa tu correo para verificar tu cuenta");
        }
        if (isError.value) {
            alertStore.error(error.value.message);
        }
        if (isSuccess.value) {
            alertStore.success("Inicio de sesión correcto");
            router.push("/admin")
        }
    });


    const signIn = async (data) => {
        await signInEmailPassword(data.email, data.password);
    };

    const resetPassword = () => {
        router.push("/reset-password");
    };

    const register = () => {
        router.push("/register");
        // all functionality
    };

    const errorLogin = (data) => {
        alertStore.error(data.error);
        // all functionality
    };


    return { signIn, register, errorLogin, isLoading, resetPassword }
}