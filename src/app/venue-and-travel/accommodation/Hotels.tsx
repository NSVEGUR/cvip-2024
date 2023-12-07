export default function Hotels() {
  return (
    <div className="relative mt-3 overflow-x-auto rounded-lg border shadow">
      <table className="w-full text-left text-sm text-muted">
        <thead className="bg-muted text-xs uppercase text-dominant">
          <tr>
            {["Hotel Name", "Room type", "Occupancy", "Cost"].map(
              (heading, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {heading}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {/* Kalyan Grand */}
          <tr className="border-b bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
              rowSpan={5}
            >
              Kalyan Grand
            </th>
            <td className="px-6 py-4">Superior</td>
            <td className="px-6 py-4">Single</td>
            <td className="px-6 py-4">3500+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Superior</td>
            <td className="px-6 py-4">Double</td>
            <td className="px-6 py-4">4000+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Superior</td>
            <td className="px-6 py-4">Three</td>
            <td className="px-6 py-4">5000+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Suit</td>
            <td className="px-6 py-4">Single</td>
            <td className="px-6 py-4">5500+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Suit</td>
            <td className="px-6 py-4">Double</td>
            <td className="px-6 py-4">6000+taxes</td>
          </tr>
          {/* SRR Grand */}
          <tr className="border-b bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
              rowSpan={4}
            >
              SRR Grand
            </th>
            <td className="px-6 py-4" rowSpan={2}>
              Deluxe room
            </td>
            <td className="px-6 py-4">Free Breakfast</td>
            <td className="px-6 py-4">2234+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Free Breakfast + Lunch/Dinner</td>
            <td className="px-6 py-4">2928+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4" rowSpan={2}>
              Executive
            </td>
            <td className="px-6 py-4">Free Breakfast</td>
            <td className="px-6 py-4">2619+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Free Breakfast + Lunch/Dinner</td>
            <td className="px-6 py-4">3237+taxes</td>
          </tr>
          {/* The Pavilion by SRP */}
          <tr className="border-b bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
              rowSpan={3}
            >
              The Pavilion by SRP
            </th>
            <td className="px-6 py-4">DELUXE TWIN</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">2560+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">SUPERIOR TWIN</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">2800+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">FAMILY TWO BEDROOM SUITE</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">4610+taxes</td>
          </tr>
          {/* Royal Grand */}
          <tr className="border-b bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
              rowSpan={2}
            >
              The Pavilion by SRP
            </th>
            <td className="px-6 py-4" rowSpan={2}>
              Standard Double Room
            </td>
            <td className="px-6 py-4">Single</td>
            <td className="px-6 py-4">3500+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Double</td>
            <td className="px-6 py-4">4000+taxes</td>
          </tr>
          {/* Standard Room */}
          <tr className="border-b bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-dominant"
              rowSpan={5}
            >
              SRR Grand
            </th>
            <td className="px-6 py-4" rowSpan={3}>
              Standard Room
            </td>
            <td className="px-6 py-4">No meals included</td>
            <td className="px-6 py-4">2200+taxes</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Free Breakfast</td>
            <td className="px-6 py-4">2500+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Free Breakfast + Lunch/Dinner</td>
            <td className="px-6 py-4">3225+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4" rowSpan={2}>
              Executive Room
            </td>
            <td className="px-6 py-4">Free Breakfast</td>
            <td className="px-6 py-4">3000+taxes</td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-6 py-4">Free Breakfast + Lunch/Dinner</td>
            <td className="px-6 py-4">3850+taxes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
