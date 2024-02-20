import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface VideoType {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
  avatar: string;
}

export interface VideosStateType {
  videos: VideoType[];
  isLoadingLing: boolean;
  isError: boolean;
  error: string;
}

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query<VideoType[], void>({
      query: () => {
        console.log("here");
        return "/videos";
      },
      keepUnusedDataFor: 6
    }),
    getSingleVideo: builder.query<VideoType, number>({
      query: (id) => `/videos/${id}`,
    }),
    getRelatedVideos: builder.query<VideoType[], any>({
      query: ({ id, title }) => {
        const limit = 5;
        // ?title_like=javascript&tags_like=react&id!=1
        const tags = title?.split(" ");
        const queryString = tags
          ?.map((tag: string, i: number) => {
            return `tags_like=${tag}`;
          })
          .join("&");

        const uniqueLimitVideo = `&id_ne=${id}&_limit=${limit}`;
        const queryAPI = `/videos/?${queryString}${uniqueLimitVideo}`;
        return queryAPI;
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetSingleVideoQuery,
  useGetRelatedVideosQuery,
} = apiSlice;
