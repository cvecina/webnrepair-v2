import { useAlertStore } from "@/stores";
import { useSignUpEmailPassword } from "@nhost/vue";
import { watchEffect } from "vue";
import { useRouter } from "vue-router";

export function useRegister() {

    const router = useRouter();
    const alertStore = useAlertStore();

    const {
        signUpEmailPassword,
        needsEmailVerification,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useSignUpEmailPassword();

    watchEffect(() => {
        if (needsEmailVerification.value) {
            alertStore.warn("Revisa tu correo para verificar tu cuenta");
        }
        if (isError.value) {
            alertStore.error(error.value.message);
        }
        if (isSuccess.value) {
            // we can signOut first or redirect directly to profile (login)
            alertStore.success("Registro correcto");
            router.push("/login");
        }
    });

    const signUp = async (data) => {
        await signUpEmailPassword(data.email, data.password);
        // all functionality
    };

    const login = () => {
        router.push("/login");
        // all functionality
    };

    const errorRegister = (data) => {
        alertStore.error(data.error);
        // all functionality
    };
    return {
        signUp, login, errorRegister, isLoading
    }
}