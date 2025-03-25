import ServerLinkButton from "@/components/ServerLinkButton";
export default async function InvoiceDetails(context) {
  const pathVariable = await context.params;
  const query_parameter = await context.searchParams;

  console.log("pathVariable", pathVariable);
  console.log("query_parameter", query_parameter);

  const type = pathVariable.details?.[0];
  const desc = pathVariable.details?.[1];

  /* 방법 2
  const { details } = pathVariable;
  const type = details[0];
  const desc = details[1]; */

  return (
    <>
      {type === undefined ? (
        <main className="text-center bg-green-100 p-6 border-b-8 border-green-700">
          <div className="text-green-500">Invoice 페이지</div>
          <ServerLinkButton href="invoices/fix/computer">
            컴퓨터 고쳐주세요
          </ServerLinkButton>
          <ServerLinkButton href="invoices/buy/bread">
            빵 사다주세요
          </ServerLinkButton>
          <ServerLinkButton href="invoices/pay/apple">
            사과 결제해주세요
          </ServerLinkButton>
        </main>
      ) : (
        <main className="text-center bg-blue-50 p-6">
          어떤 요구사항인지 상세 내용을 볼까요?
          <div>- 타입은 {type},</div>
          <div>- 상세내용은 {desc}</div>
        </main>
      )}
    </>
  );
}
