export async function GET(request: Request) {
  const array = [
    { id: "1", type: "type", name: "name", trefleId: "123" },
    { id: "2", type: "type2", name: "name2", trefleId: "456" },
  ];
  return new Response(JSON.stringify(array));
}