import axiosClient from "./axiosClient";

const songApi = {
    getAll: (params) => {
        const url = '/song';
        return axiosClient.get(url, {params});
    },
    updateLikedSong: (id, liked) => {
        const url = `/song/${id}`
        return axiosClient.patch(url, {liked: !liked})
    }
}
export default songApi