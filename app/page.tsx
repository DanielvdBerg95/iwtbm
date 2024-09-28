

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-md"> I want to be a millionaire</h1>
        <h2 className="text-center">Donate now to help me achieve this Dream</h2>
        <div>
          <table className="bg-cyan-950 border-2 border-blue-700">
            <thead className="left-0 p-5">
              <tr>
                <th className="left-0">
                  <span className=" left-0 text-md font-bold">Details</span>
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr className="p-2">
                <td className="p-2">Bank Name: </td>
                <td className="p-2">Absa</td>
              </tr>
              <tr className="p-2">
                <td className="p-2">Account Holder: </td>
                <td className="p-2">Leon Holtzhausen</td>
              </tr>
              <tr >
                <td className="p-2">Account Number: </td>
                <td className="p-2">123456789</td>
              </tr >
              <tr>
                <td className="p-2">Branch Code: </td>
                <td className="p-2">2485</td>
              </tr>
              
            </tbody>
          </table>
        </div>

      </main>
      
    </div>
  );
}
