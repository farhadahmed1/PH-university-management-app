import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data?.data || []);

  return (
    <div>
      <h2>Academic Semester </h2>
      <p>This is the Academic Semester page</p>
    </div>
  );
};

export default AcademicSemester;
