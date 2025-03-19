"use client";

export default function CustomerError() {
  return (
    <main className="flex flex-col items-center p-6">
      <div className="text-gray-500">
        <div>
          <b>에러가 발생하였으니, 적절한 처리가 필요합니다.</b>
        </div>
        <br />
        <div>
          http://localhost:3000/dashboard/customers 조회할때 에러 발생 시
        </div>
        <div>페이지 전체가 오류나지 않고, page.jsx 가 아닌 error.jsx 표기</div>
        <br />
        <b>
          꼭 주의해야할것은 error.jsx나 loading.jsx 같은 파일들은
          <br />
          'user client' 꼭 명시해야한다는 것
        </b>
      </div>
    </main>
  );
}
