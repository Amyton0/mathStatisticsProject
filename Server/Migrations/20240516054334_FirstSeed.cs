using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MathStatisticsProject.Migrations
{
    public partial class FirstSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Lessons",
                columns: new[] { "Id", "Date", "Number" },
                values: new object[,]
                {
                    { new Guid("586088ab-8894-46a2-bb75-773d848f1cf7"), new DateTime(2024, 2, 18, 19, 0, 0, 0, DateTimeKind.Utc), 3 },
                    { new Guid("a9212a89-2693-4339-8a9d-0a34fd3d8779"), new DateTime(2024, 2, 11, 19, 0, 0, 0, DateTimeKind.Utc), 2 },
                    { new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), new DateTime(2024, 2, 4, 19, 0, 0, 0, DateTimeKind.Utc), 1 },
                    { new Guid("e8da9ec5-49c3-4341-aa7c-0ae05cafd2f6"), new DateTime(2024, 2, 25, 19, 0, 0, 0, DateTimeKind.Utc), 4 }
                });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "FirstName", "Group", "SecondName", "ThirdName" },
                values: new object[,]
                {
                    { new Guid("18b38dd3-5095-4aba-95b8-67d65930a204"), "Вася", "204", "Пупкин", "2" },
                    { new Guid("3c0bc991-50c4-44d2-a82a-df5124ebf115"), "Джейсон", "202", "Цитатный", "Мастер" },
                    { new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"), "Вася", "204", "Пупкин", "1" },
                    { new Guid("8d841c70-3990-40a3-b895-c13de27298f5"), "Сильвестер", "201", "Сталоне", "Машина" }
                });

            migrationBuilder.InsertData(
                table: "Teachers",
                columns: new[] { "Id", "FirstName", "SecondName", "ThirdName" },
                values: new object[] { new Guid("2de4dd70-aeaa-4dee-807e-f7f8532756b8"), "Прокофьев", "Сергей", "Павлович" });

            migrationBuilder.InsertData(
                table: "Attendances",
                columns: new[] { "LessonId", "StudentId", "AttendanceStatus" },
                values: new object[,]
                {
                    { new Guid("586088ab-8894-46a2-bb75-773d848f1cf7"), new Guid("18b38dd3-5095-4aba-95b8-67d65930a204"), 1 },
                    { new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), new Guid("3c0bc991-50c4-44d2-a82a-df5124ebf115"), 1 },
                    { new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"), 1 },
                    { new Guid("e8da9ec5-49c3-4341-aa7c-0ae05cafd2f6"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"), 1 }
                });

            migrationBuilder.InsertData(
                table: "Homeworks",
                columns: new[] { "Id", "Complexity", "Content", "LessonId", "Message", "Number", "Points", "Send", "Status", "StudentId" },
                values: new object[,]
                {
                    { new Guid("141b14a3-a7c4-4aa4-8371-263a6dc03271"), 0, "aaaa", new Guid("586088ab-8894-46a2-bb75-773d848f1cf7"), "ya legnda", 3, 5.0, new DateTime(2024, 5, 16, 5, 43, 33, 822, DateTimeKind.Utc).AddTicks(1142), 0, new Guid("8d841c70-3990-40a3-b895-c13de27298f5") },
                    { new Guid("5f6f3ee1-c2e7-4fd6-b92b-f7e8435dd0be"), 0, "aaaa", new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), "ya legnda", 1, 0.59999999999999998, new DateTime(2024, 5, 16, 5, 43, 33, 822, DateTimeKind.Utc).AddTicks(1136), 2, new Guid("18b38dd3-5095-4aba-95b8-67d65930a204") },
                    { new Guid("64ee18e6-261c-493a-8470-4a948adb0cc5"), 1, "aaaa", new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), "ya legnda", 1, 0.59999999999999998, new DateTime(2024, 5, 16, 5, 43, 33, 822, DateTimeKind.Utc).AddTicks(1126), 0, new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8") },
                    { new Guid("c8533872-280e-461e-9d4a-291e34269c8e"), 0, "aaaa", new Guid("a9212a89-2693-4339-8a9d-0a34fd3d8779"), "ya legnda", 2, 0.59999999999999998, new DateTime(2024, 5, 16, 5, 43, 33, 822, DateTimeKind.Utc).AddTicks(1139), 2, new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8") }
                });

            migrationBuilder.InsertData(
                table: "Scores",
                columns: new[] { "LessonId", "StudentId", "Value" },
                values: new object[,]
                {
                    { new Guid("a9212a89-2693-4339-8a9d-0a34fd3d8779"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"), 2.0 },
                    { new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"), 2.0 },
                    { new Guid("e8da9ec5-49c3-4341-aa7c-0ae05cafd2f6"), new Guid("8d841c70-3990-40a3-b895-c13de27298f5"), 0.5 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Attendances",
                keyColumns: new[] { "LessonId", "StudentId" },
                keyValues: new object[] { new Guid("586088ab-8894-46a2-bb75-773d848f1cf7"), new Guid("18b38dd3-5095-4aba-95b8-67d65930a204") });

            migrationBuilder.DeleteData(
                table: "Attendances",
                keyColumns: new[] { "LessonId", "StudentId" },
                keyValues: new object[] { new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), new Guid("3c0bc991-50c4-44d2-a82a-df5124ebf115") });

            migrationBuilder.DeleteData(
                table: "Attendances",
                keyColumns: new[] { "LessonId", "StudentId" },
                keyValues: new object[] { new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8") });

            migrationBuilder.DeleteData(
                table: "Attendances",
                keyColumns: new[] { "LessonId", "StudentId" },
                keyValues: new object[] { new Guid("e8da9ec5-49c3-4341-aa7c-0ae05cafd2f6"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8") });

            migrationBuilder.DeleteData(
                table: "Homeworks",
                keyColumn: "Id",
                keyValue: new Guid("141b14a3-a7c4-4aa4-8371-263a6dc03271"));

            migrationBuilder.DeleteData(
                table: "Homeworks",
                keyColumn: "Id",
                keyValue: new Guid("5f6f3ee1-c2e7-4fd6-b92b-f7e8435dd0be"));

            migrationBuilder.DeleteData(
                table: "Homeworks",
                keyColumn: "Id",
                keyValue: new Guid("64ee18e6-261c-493a-8470-4a948adb0cc5"));

            migrationBuilder.DeleteData(
                table: "Homeworks",
                keyColumn: "Id",
                keyValue: new Guid("c8533872-280e-461e-9d4a-291e34269c8e"));

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumns: new[] { "LessonId", "StudentId" },
                keyValues: new object[] { new Guid("a9212a89-2693-4339-8a9d-0a34fd3d8779"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8") });

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumns: new[] { "LessonId", "StudentId" },
                keyValues: new object[] { new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"), new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8") });

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumns: new[] { "LessonId", "StudentId" },
                keyValues: new object[] { new Guid("e8da9ec5-49c3-4341-aa7c-0ae05cafd2f6"), new Guid("8d841c70-3990-40a3-b895-c13de27298f5") });

            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "Id",
                keyValue: new Guid("2de4dd70-aeaa-4dee-807e-f7f8532756b8"));

            migrationBuilder.DeleteData(
                table: "Lessons",
                keyColumn: "Id",
                keyValue: new Guid("586088ab-8894-46a2-bb75-773d848f1cf7"));

            migrationBuilder.DeleteData(
                table: "Lessons",
                keyColumn: "Id",
                keyValue: new Guid("a9212a89-2693-4339-8a9d-0a34fd3d8779"));

            migrationBuilder.DeleteData(
                table: "Lessons",
                keyColumn: "Id",
                keyValue: new Guid("b0d95707-f6a5-4970-bfa2-b2966196b935"));

            migrationBuilder.DeleteData(
                table: "Lessons",
                keyColumn: "Id",
                keyValue: new Guid("e8da9ec5-49c3-4341-aa7c-0ae05cafd2f6"));

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("18b38dd3-5095-4aba-95b8-67d65930a204"));

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("3c0bc991-50c4-44d2-a82a-df5124ebf115"));

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"));

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("8d841c70-3990-40a3-b895-c13de27298f5"));
        }
    }
}
