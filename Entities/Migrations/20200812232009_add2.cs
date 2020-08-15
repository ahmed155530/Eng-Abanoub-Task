using Microsoft.EntityFrameworkCore.Migrations;

namespace Entities.Migrations
{
    public partial class add2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "firstName",
                table: "Customers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "lastName",
                table: "Customers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "firstName",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "lastName",
                table: "Customers");
        }
    }
}
