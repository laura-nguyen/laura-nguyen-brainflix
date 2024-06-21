const API_URL = import.meta.env.VITE_API_URL

export const getVideoDetails = () => `${API_URL}videos`;

export const getVideoEndpoint = (id) => `${API_URL}videos/${id}`;

export const postComment = (id) => `${API_URL}videos/${id}/comments`;

export const deleteComment = (videoId, commentId) => `${API_URL}videos/${videoId}/comments/${commentId}`;

export const postVideo = () => `${API_URL}videos`;


