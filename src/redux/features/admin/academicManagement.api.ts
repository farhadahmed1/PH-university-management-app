import { TAcademicSemester, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
        params: {
          name: "Summer",
        },
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          // meta: response.meta,
        };
      },
    }),
    addAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-student",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, useAddAcademicSemestersMutation } =
  academicManagementApi;
