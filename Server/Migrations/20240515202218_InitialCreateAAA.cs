using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MathStatisticsProject.Migrations
{
    public partial class InitialCreateAAA : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Attendances",
                columns: new[] { "Id", "AttendanceStatus", "Date", "LessonId", "LessonNumber", "StudentId" },
                values: new object[] { new Guid("a5cc0060-30b0-4ad7-b1da-908edb065dd0"), 0, new DateTime(2024, 5, 16, 1, 22, 18, 698, DateTimeKind.Local).AddTicks(9372), new Guid("1de4dd70-aeaa-4dee-807e-f7f8532755b8"), 2, new Guid("5de4dd70-aeaa-4dee-807e-f7f8532756b8") });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Attendances",
                keyColumn: "Id",
                keyValue: new Guid("a5cc0060-30b0-4ad7-b1da-908edb065dd0"));
        }
    }
}
