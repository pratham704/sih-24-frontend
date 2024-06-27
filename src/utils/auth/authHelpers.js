import { useRecoilState } from "recoil";
import centralAuth from "../../stores/recoil/auth.store";

const useAuthHelper = () => {
    const [authData, setAuthData] = useRecoilState(centralAuth);

    const authHelper = async() => {
        try {
            // const response = await fetch("/api/v1/comman/check-user", {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     credentials: "include",
            // });

            // const data = await response.json();

            setAuthData({
                "token": "dsgiouhsldvgusdvpiusdgvushdpuvgsdp",
                "name": "pratham"
            });
        } catch (error) {
            console.error("Error fetching authentication data:", error);
        }
    };

    return authHelper;
};

export { useAuthHelper };