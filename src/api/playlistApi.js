import axiosClient from "./axiosClient";

const playlistApi = {
    getAll (params) {
        const url = '/playlist';
        return axiosClient.get(url, {params});
    },
    get(id) {
        const url = `/playlist/${id}`
        return axiosClient.get(url)
    },
    updateLikedPlaylist (id, liked) {
        const url = `/playlist/${id}`
        return axiosClient.patch(url, {liked: !liked})
    }
}
export default playlistApi