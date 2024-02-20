export const titleQueryMake = (title: string, limit: number, id: number) => {
    const tags = title?.split(" ");
    const queryString = tags
      ?.map((tag: string, i: number) => {
        return `title_like=${tag}`;
      })
      .join("&");

    const uniqueLimitVideo = `&id_ne=${id}&_limit=${limit}`;
    const queryAPI = `/videos/?${queryString}${uniqueLimitVideo}`;
    return queryAPI;
}