import { service } from "../response";

const Services = () => {
  return (
    <section>
      <div className="container rounded pb-6">
        <div className="bg-white shadow">
          <div>
            <div>
              <table className="w-full table-auto border-collapse border">
                <thead className="font-semibold">
                  <tr>
                    {service.head.map((head, index) => (
                      <th key={index} className={`border p-3 text-center`}>
                        {head.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.body.map((body, index) => (
                    <tr
                      key={index}
                      className={`border ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } font-medium`}
                    >
                      <td className="border p-3 text-center">{index + 1}</td>
                      <td className="border p-3">{body.name}</td>
                      <td className="border p-3 text-center">{body.price}</td>
                      <td className="border p-3 text-center">{body.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
