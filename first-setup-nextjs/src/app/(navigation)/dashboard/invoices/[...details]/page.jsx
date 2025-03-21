export default async function InvoiceDetails(context) {
  const pathVariable = await context.params;
  const query_parameter = await context.searchParams;

  console.log("pathVariable", pathVariable);
  console.log("query_parameter", query_parameter);

  const type = pathVariable.details[0];
  const desc = pathVariable.details[1];

  /* 방법 2
  const { details } = pathVariable;
  const type = details[0];
  const desc = details[1]; */

  return (
    <main className="text-center bg-blue-50 p-6">
      어떤 요구사항인지 상세 내용을 볼까요?
      <div>- 타입은 {type}, </div>
      <div>- 상세내용은 {desc} </div>
    </main>
  );
}
