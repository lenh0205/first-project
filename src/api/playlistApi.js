import axios from "axios";
import axiosClient from "./axiosClient";

const playlistApi = {
    getAll(params) {
        const url = '/playlist';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/playlist/${id}`
        return axiosClient.get(url)
    },
    add(data) {
        const url = '/playlist';
        return axiosClient.post(url, data)
    },
    updateLikedPlaylist(id, liked) {
        const url = `/playlist/${id}`
        return axiosClient.patch(url, { liked: !liked })
    }
}
export default playlistApi