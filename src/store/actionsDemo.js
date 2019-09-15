import store from "./store";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000
});

const actionsDemo = store => ({
    // setter data
    setTimer(state, value) {
        if (value === 0) {
            // console.log("nambah");
            return { stepIndex: store.getState().stepIndex + 1 };
        }
        return { timerNow: value };
    },
    setStepIndex(state, value) {
        console.log("sett");
        return { stepIndex: value };
    },
    setWaterNow(state, value) {
        return { waterNow: value };
    },
    setStepWater(state, value) {
        return { stepWater: value };
    },
    setStepTime(state, value) {
        return { stepTime: value };
    },
    setWaterLimit(state, value) {
        return { waterLimit: value };
    },

    async postHistory(state, data) {
        console.log("test");
        let config = {
            method: "post",
            url: store.getState().baseURL + "/history",
            data: data,
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        };
        await axios(config)
            .then(response => {
                store.setState({ historyID: response.data.data.id });
            })
            .catch(error => console.log("Error postHistory", error));
    },

    async postReview(state, data) {
        console.log("test", data);
        let config = {
            method: "post",
            url: store.getState().baseURL + "/reviews",
            data: data,
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        };
        await axios(config)
            .then(response => {

            })
            .catch(error => console.log("Error postReview", error));
    },
});

export default actionsDemo;