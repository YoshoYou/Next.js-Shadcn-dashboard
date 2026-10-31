import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      name: "Aya",
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      name: "Maya",
      id: "728ed52p",
      amount: 160,
      status: "success",
      email: "aya@example.com",
    },
    {
      name: "sarah",
      id: "728er52f",
      amount: 30,
      status: "processing",
      email: "maya@example.com",
    },
    {
      name: "Rahaf",
      id: "728ed22f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      name: "Yara",
      id: "728ed52f",
      amount: 100,
      status: "failed",
      email: "rahaf@example.com",
    },
    {
      name: "Mera",
      id: "728ed52f",
      amount: 235,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      name: "Naya",
      id: "728ed523f",
      amount: 1038,
      status: "success",
      email: "maya@example.com",
    },
    {
      name: "Yana",
      id: "728ed33f",
      amount: 138,
      status: "success",
      email: "mera@example.com",
    },
    {
      name: "Rema",
      id: "728fr23f",
      amount: 148,
      status: "success",
      email: "maya@example.com",
    },
    {
      name: "Sally",
      id: "728ed523f",
      amount: 290,
      status: "failed",
      email: "naya@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
