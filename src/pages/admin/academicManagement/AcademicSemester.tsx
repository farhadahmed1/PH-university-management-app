import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types";

export type TTableData = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;
const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemestersQuery(undefined);
  console.log(semesterData);

  const tableData = semesterData?.data?.map(
    ({ _id, endMonth, startMonth, name, year }) => ({
      _id,
      endMonth,
      startMonth,
      name,
      year,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",

      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "StartMonth",
      dataIndex: "startMonth",
    },
    {
      title: "EndMonth",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
